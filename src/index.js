import React from 'react';
import ReactDOM from 'react-dom';


// 
// function TextInput2(props,ref){
//   return <input ref={ref}/>
// }
// let TextInput3 = forwardRef(TextInput2) 
// 非受控组件指的是DOM元素的值存在DOM元素的内部，不受React控制
// 受控组件指的是DOM元素的值受React状态控制

// function forwardRef(funcComponent){
//   return function(){

//   }
// }
class Counter extends React.Component{
  constructor(props){
    super(props)
   
  }
 
  render(){
  
    return (
      <>
      
      </>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
