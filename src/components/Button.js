// 컴포넌트
// 화면만 그려준다.

import React from 'react';

// es6문법
// const : 상수화 시키기 위해서 (바뀔 일이 없기 때문)
const Button = ({ content, boxFunc, bgColor }) =>{
  return(
    <button type="button" className="square_btn" onClick={boxFunc}>{content}</button>
  )
}

export default Button;
