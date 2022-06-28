import React, { Component } from 'react'

class ChildCpn extends Component{
  // 默认拥有，可以不写
  // constructor(props){
  //   super(props);
  // }
  render(){
    const {name,age,height}=this.props;

    return (
      <h2>子组件展示数据:{name+" "+age+" "+height}</h2>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
      <ChildCpn name="why" age="18" height="1.88"/>
      <ChildCpn name="kobe" age="40" height="1.98"/>
      </div>
    )
  }
}
