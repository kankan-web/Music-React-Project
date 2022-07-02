import React, { Component,createRef } from 'react'
class Counter extends Component{
  constructor(props){
    super(props)
    this.state={
      counter:0
    }
  }
  render(){
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e=>this.increaseNum()}>+1</button>
      </div>
    )
  }
  increaseNum(){
    this.setState({
      counter:this.state.counter+1
    })
  }
}

export default class App extends Component {
  constructor(props){
    super(props)
    this.titleRef=createRef(); 
    this.titleEl=null;
    this.counterRef = createRef(); 
    }
  render() {
    return (
      <div>
        <h2 ref="titleRef">Hello React</h2>
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2 ref={arg=>this.titleEl=arg}>Hello React</h2>
        <button onClick={e=>this.changeText()}>改变文本</button>
        <hr/>
        <Counter ref={this.counterRef}/>
        <button onClick={e=>this.addNum()}>点击增加</button>
      </div>
    )
  }
  changeText(){
    // 1.使用方式一：字符串（不推荐，后续的更新会删除
    // this.refs.titleRef.innerHTML = 'Hello Codewhy';
    // 2.使用方式二：对象方式
    this.titleRef.current.innerHTML = 'Hello JavaScript';
    // 3.使用方式三：回调函数方式
    this.titleEl.innerHTML = 'Hello TypeScript'
  }
  addNum(){
   this.counterRef.current.increaseNum();   
  }
}
