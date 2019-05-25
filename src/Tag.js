import React, { Component } from 'react';
import './css/tag.css';
import './css/box.css';
import './css/button.css';
import Box from './Box';
import Button from './components/Button';

/*
	mount -> 태그가 생성될때 ( 붙었을때 )
	unmount -> 태그가 사라질때

	smart VS dumb 컴포넌트

	smart -> 기존 클래스 방식을 사용한다. props 와 state 와 life cycle 가능하다.
	dumb -> 함수형 컴포넌트. props 만 받을때 사용한다. (화면을 그리는 용도로만 사용할때)

	LifeCycle (생명주기)


*/

class Tag extends Component {

	constructor(){
		super();

		this.state = {
			show : false,
			number : 0
		}

		this.handleCreate = this.handleCreate.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
	}

	handleCreate(){
		if(this.state.show === false){
			this.setState({ number : 0 });
		}
		this.setState({ show : true });
	}

	handleDelete(){
		this.setState({ show : false, number : 0 });
	}

	handleToggle(){
		if(this.state.show === false){
			this.setState({ number : 0 });
		}
		this.setState({ show : !this.state.show })
	}

	handleNumber(){
		this.setState({ number : this.state.number + 1 });
	}
	render(){

		let { show } = this.state;

		return (
			<div className="tag-wrapper">
				<Button content="상자를 생성하기" boxFunc={this.handleCreate} bgColor="red" />
				<Button content="상자를 삭제하기" boxFunc={this.handleDelete} bgColor="green" />
				<Button content="상자를 생성/삭제하기" boxFunc={this.handleToggle} bgColor="blue" />
				<Button content="숫자증가하기" boxFunc={this.handleNumber} bgColor="orange" />
				{/*<button onClick={this.handleCreate}>상자를 생성하기</button>
				<button onClick={this.handleDelete}>상자를 삭제하기</button>
				<button onClick={this.handleToggle}>상자를 생성/삭제</button>*/}
				{ /*(show) ? <div className="box"></div>:null*/ }
				{ show && <Box number={this.state.number} /> }
			</div>
		)
	}
}

export default Tag;

// hanpixel.com/src.zip
