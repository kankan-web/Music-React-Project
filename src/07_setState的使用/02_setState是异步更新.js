import React, { Component } from 'react'

function Home(props){
  return (
    <h2>{props.message}</h2>
  )
}
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'Hello World'
    }
  }
  render() {
    return (
      <div>
        <div>当前计数为:{this.state.message}</div>
        <button onClick={e=>this.changText()}>+1</button>
        <Home message={this.state.message}/>
      </div>
    )
  }
  componentDidUpdate(){
    //方式二：获取异步更新的state
    console.log(this.state.message)
  }
  changText(){
    // this.state.counter+=1
    // 2.setState是异步更新的
    this.setState({
      message:"你好，李焕英"
    })
    console.log(this.state.message);//Hello World
    //方式一： 获取更新后的数据，setState(更新的state，回调函数)
     this.setState({
      message:"你好，李焕英"
    },()=>{
      console.log(this.state.message);//较慢
    })
  }
}
