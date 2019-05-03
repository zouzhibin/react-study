import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1、ref 字符串 2、ref =函数 3、ref
 * 
 * 
 * 
 */

 /**
  * createRef 实现
  */
 function createRef(){
   return {current:null}
 }
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.numA = createRef(); //current:null
    this.numB = createRef(); //current:null
    this.result = createRef(); //current:null
  }
  add=()=>{
    let numA = this.numA.current.value;
    let numB = this.numB.current.value;
    let result =parseFloat(numA)+ parseFloat(numB);
    this.result.current.value = result
  }

  render(){
  
    return (
      <>
       <input ref={this.numA}/> +
       <input ref={this.numB}/> 
       <button onClick={this.add}>=</button>  
       <input ref={this.result}/> 
      </>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
