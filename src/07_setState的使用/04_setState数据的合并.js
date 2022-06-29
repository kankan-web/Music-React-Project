import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'Hello World',
      name:'kebe'
    }
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <div>{this.state.name}</div>
      </div>
    )
  }

  changText(){
    // 了解真相，你才能获得真正的自由
    this.setState({
      message:"你好，李焕英"
    })
    // 关键
    // Object.assign({},this.state,{message:"你好，李焕英"})
  }
}
