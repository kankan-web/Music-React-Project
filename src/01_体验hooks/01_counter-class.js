import React, { PureComponent } from 'react'

export default class CounterClass extends PureComponent {
  constructor(props){
    super(props)
    this.state ={
      counter:0
    }
  }
  render() {
    return (
      <div>
        <h2>CounterClass:{this.state.counter}</h2>
        <button onClick={e=>this.increment()}>+</button>
        <button onClick={e=>this.decrement()}>-</button>

      </div>
    )
  }
  increment(){
    this.setState({counter:this.state.counter+1})
  }
  decrement(){
    this.setState({counter:this.state.counter-1})
  }
}
