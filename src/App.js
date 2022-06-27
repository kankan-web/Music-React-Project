import React, { Component } from 'react'
class Cpn extends Component {
  render(){
    return <h2>我是Cpn组件</h2>
  }
  componentWillUnmount(){
    console.log("调用了Cpn的componentWillUnmount方法")
  }
}
export default class App extends Component {
  constructor(){
    super();
    console.log('执行了组件的constructor')
    this.state = {
      counter:0,
      isShow:true,
    }
  }
  render() {
    console.log('执行了组件的render函数')
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e=>this.increment()}>+1</button>
        <hr/>
        <button onClick={e=>this.changeCpnShow()}>切换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }
  changeCpnShow(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
  increment(){
    this.setState({
      counter:this.state.counter+1
    })
  }
  componentDidUpdate(){
    console.log('执行了组件的componentDidUpdate方法')
  }
  componentDidMount(){
    console.log('执行了组件的componentDidMount方法')
  }
}
