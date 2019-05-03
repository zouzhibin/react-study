import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

/**
 * jsx javascript +xml 是一种把js和html混合书写的一种语法
 * jsx 是用来描述界面上的元素长什么样子的
 * jsx 可增加属性 js dom xx.classname
 * jsx 里面如果想使用一个变量，我们需要把它放在大括号里面
 */


 /**
  * 我们把页面分成若干的独立的部分，单独编写，单独维护
  * 1、一个返回普通React元素的函数就是一个合法的React组件
  * 2、组件需要返回一个并且仅能返回一个React根元素
  * 3、组件的名称必须大写字母开头
  */
 
/**
 * 1、收集属性对象 props {name:"zouzhibin",age:10}
 * 2、会把props对象传入Come函数 并得到一个返回值React元素
 */
// function Come(props){
//     return <h1>hello{props.name}</h1>
// }
// let element = (<h1 className="title" style={{color:'red',fontSize:'50px'}}>
//                 hello
//                 <span>world</span>
//                 </h1>
//                 )
// 1、纯粹的字符串
// react 其实会转换成这种结构
// let element1 = React.createElement("h1", {
//     className: "title",
//     style: {
//       color: 'red',
//       fontSize: '50px'
//     }
//   }, "hello", React.createElement("span", null, "world"));            
// console.log('11',element1)
// 2、函数式组件
// function Welcome(props){
//  // return <h1>hello {props.name} {props.age}</h1>
//  return React.createElement("h1", null, "hello ", props.name, " ", props.age);
// }
// let element1 = React.createElement(Welcome,{name:"zzb",age:10})
// console.log(11,element1)

// 3、类组件
class Welcome1 extends React.Component{
  render(){
    return React.createElement("h1", null, "hello ", this.props.name, " ", this.props.age);
  }
}

let element1 = React.createElement(Welcome1,{name:"zzb",age:10})
console.log('22',element1)
ReactDOM.render(element1, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
