import React, { Component } from 'react'
import {EventEmitter}from 'events';
//事件总线：event bus
const eventBus = new EventEmitter();

class Home extends Component{
  componentDidMount(){
    eventBus.addListener("sayHello",this.handleSayHelloListener)
  }
  componentWillUnmount(){
    eventBus.removeListener("sayHello",this.handleSayHelloListener)
  }
  handleSayHelloListener(name,message){
    console.log(name,message)
  }
  render(){
    return (
      <div>Home</div>
    )
  }
}
class Profile extends Component{
  render(){
    return (
      <div>Profile
        <button onClick={e=>this.emmitEvent()}>点击了profile按钮</button>
      </div>
    )
  }
  emmitEvent(){
    eventBus.emit("sayHello",123,"hello home")
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
