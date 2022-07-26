import React, { PureComponent } from 'react'
import store from '../store'
import { addAction } from '../store/actionCreators'

export default class home extends PureComponent {
  constructor(props){
    super(props)
    this.state ={
      counter:store.getState().counter
    }
  }
  componentDidMount(){
    this.unsubscribue = store.subscribe(()=>{
      this.setState({
        counter:store.getState().counter
      })
    })
  }
  componentWillUnmount(){
    this.subscribe();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h3>当前计数{this.state.counter}</h3>
        <button onClick={e=>this.increment()}>+1</button>
        <button onClick={e=>this.addNumber(5)}>+5</button>
      </div>
    )
  }
  increment(){
    store.dispatch(addAction(1))
  }
  addNumber(num){
    store.dispatch(addAction(num))
  }
}
