import React, { Component } from 'react';

// 생명주기( lifecycle )

/*
	예약된 메소드들이다.

	constructor -> 가장 먼저 실행되는 메소드
	componentWillMount -> 최초 한번 mount가 되기전에 실행된다.
	componentDidMount -> 최초 한번 mount가 되고 난후 실행된다. ( ajax, setInterval, http 등을 여기서 실행시켜 준다.)

	componentWillReceiveProps -> 컴포넌트 props 새로 받았을때 ( 여기서 setState 적용하면 추가로 랜더링 되지 않는다. )
	shouldComponentUpdate -> props혹은 state 변경되었을때 랜더링을 할지 말지 정할수 있다. (return 값에 따라서 랜더링을 조절할수 있다.)

	componentWillUpdate -> 컴포넌트가 업데이트 되기전에 실행 (setState를사용하지 않는다.)
	componentDidUpdate -> 컴포넌트가 업데이트 되고 난 후 실행

	componentWillUnmount -> mount가 해제 되었을때
*/

class Box extends Component {

	constructor(){
		super();
		console.log('constructor');

		this.state = { cdm : 'X' }
	}

	componentWillUnmount(){
		console.log('componentWillUnmount');
	}

	componentDidUpdate(prevProps, prevState){
		console.log('componentDidUpdate');
	}

	componentWillUpdate(nextProps, nextState){
		console.log('componetWillUpdate');
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate');

		if ( nextProps.number < 10 ) {
			return true;
		} else {
			return false;
		}
	}

	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps');
		console.log(nextProps);
	}

	componentDidMount(){
		console.log('componentDidMount');
		this.setState({ cdm : 'O' });
	}

	componentWillMount(){
		console.log('componentWillMount');
	}

	render(){
		console.log('render');

		return (
			<div className="square_btn35">{this.props.number}</div>
		)
	}
}

export default Box;
