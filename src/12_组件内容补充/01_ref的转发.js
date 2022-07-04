import React, { Component,createRef,forwardRef } from 'react'
class Home extends Component{
  render(){
    return <div>Home</div>
  }
}
const Profile = forwardRef(function (props,ref){
  console.log(props.name)
  return <div ref={ref}>Profile</div>
})

export default class App extends Component {
  constructor(props){
    super(props)
    this.homeRef = createRef()
    this.appRef = createRef()
    this.profileRef = createRef()
  }
  render() {
    return (
      <div>
        <h2 ref={this.appRef}>App</h2>
        <Home ref={this.homeRef}></Home>
        <Profile ref={this.profileRef} name="kebe"/>
        <button onClick={e=>this.getRef()}>点击获取dom</button>
      </div>
    )  
  }
  getRef(){
    console.log('APP',this.appRef.current)
    console.log('Home',this.homeRef.current)
    console.log('Profile',this.profileRef.current)
  }
}
