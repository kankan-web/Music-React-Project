import React, { Component } from 'react'
import TabControl from './TabControl'
export default class App extends Component {
  constructor(props){
    super(props)
    // this放固定的量
    this.titles = ["新款","精选","流行"]
    // 推荐this.state放变量
    this.state={
      currentTitle:'新款'
    }
  }
  render() {
    const {currentTitle} = this.state
    return (
      <div>
        <TabControl itemClick={index=>this.itemClick(index)} titles={this.titles}></TabControl>
        <h2>{currentTitle}</h2>
      </div>
    )
  }
  itemClick(index){
    console.log(index)
    this.setState({
      currentTitle:this.titles[index]
    })
  }
}
