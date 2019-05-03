import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 解决this指针的三种方法
 * 1、this.add.bind(this) 把add 方法里的this指针绑定为 组件实例
 * 2、使用匿名函数()=>{}
 * 3、类的属性
 */
class Counter extends React.Component{
  constructor(props){
    super(props)
    // 在构造函数里，是唯一可以给this.state赋初始值的地方
    this.state = {number:0}
  }
  // 这种写法是为类的实例增加一个add的属性，而这个属性里的this绑死为组件的实例
  // 这种写法是直接赋值给组件实例 ，而不是放在原型上的
  add=()=>{
    console.log(this)
    // Cannot read property 'setState' of undefined
    // 修改组件状态的唯一方法 是调用this.setState replaceState(已经废弃)

    this.setState({number:this.state.number+1})

    // 还有一个方法 强制更新 ，不管状态和属性修改没有，都会强制刷新页面 this.forceUpdate()
    // this.state.number = this.state.number+1
    // this.forceUpdate()

    // this.setState这个方法是异步的
    // 如果采用下面这种写法 ，其实状态没有直接进行改变，而是放入一个队列中
    this.setState((state)=>({number:state.number+1}))
    this.setState((state)=>({number:state.number+1}))
  }
  render(){
    console.log(this)
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={this.add.bind}>点击</button>
        {/* <button onClick={this.add.bind(this)}>点击+</button> */}
      </>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
