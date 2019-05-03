import React from './react';
import ReactDOM from './react-dom';
class Clock extends React.Component{
  constructor(props){
    super(props)
    // 在构造函数里，是唯一可以给this.state赋初始值的地方
    this.state = {data:new Date().toLocaleTimeString()}
  }
  // 组件挂载完成后调用
  componentDidMount(){
    this.$timer = setInterval(()=>{
      // 改变组建的唯一方法是调用 this.setState
      // 它会1、修改状态 2、重新render
      this.setState({
        data:new Date().toLocaleTimeString()
      })
    })
  }
  render(){
    return <div>时间:{this.state.data.replace("下午",'')}</div>
  }
}

ReactDOM.render(<Clock/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
