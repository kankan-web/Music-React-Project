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
        <button id="btn">改变文本</button>
      </div>
    )
  }
  componentDidUpdate(){
    // 同步二：
    document.getElementById(btn).addEventListener('click',()=>{
      this.setState({
        message:"你好，李焕英"
      })
      console.log(this.state.message)//你好，李焕英
    })
  }
  changText(){
    //同步一：
    setTimeout(()=>{
      this.setState({
        message:"你好，李焕英"
      })
      console.log(this.state.message)//你好，李焕英
    },0)
  }
}
