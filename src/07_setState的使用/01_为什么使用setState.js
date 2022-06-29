import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter:0
    }
  }
  render() {
    return (
      <div>
        <div>当前计数为:{this.state.counter}</div>
        <button onClick={e=>this.increment()}>+1</button>
      </div>
    )
  }
  increment(){
    // this.state.counter+=1
    this.setState({
      counter:this.state.counter+1
    })
  }
}
