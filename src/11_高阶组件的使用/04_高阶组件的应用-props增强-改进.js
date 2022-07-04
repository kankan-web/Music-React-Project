import React, { PureComponent,createContext } from 'react'
const UserContext = createContext({
  nickname:"默认",
  level:-1,
  region:"中国"
})
// 定义一个高阶组件
function withUser(WrappedComponent){
  return props=>{
    return (
      <UserContext.Consumer>
        {
          user=>{
            return <WrappedComponent {...props} {...user}/>
          }
        }
      </UserContext.Consumer>
    )
  }
}

class Home extends PureComponent{
  render(){
    return <h2>Home:{`昵称:${this.props.nickname} 等级:${this.props.level} 地区:${this.props.region}` }</h2>
  }
}
class About extends PureComponent{
  render(){
    return <h2>About:{`昵称:${this.props.nickname} 等级:${this.props.level} 地区:${this.props.region}`}</h2>
  }
}
class Detail extends PureComponent {
  render(){
    return (
      <ul>
        <li>{this.props.nikename}</li>
        <li>{this.props.level}</li>
        <li>{this.props.region}</li>
      </ul>
    )
  }
}
const UserHome =withUser(Home)
const UserAbout =withUser(About)
const UserDetail =withUser(Detail)

export default class App extends PureComponent {
  render() {
    return (

      <div>
        App
        <UserContext value={{nikename:'why',level:18,region:'中国'}}>
          <UserHome/>
          <UserAbout/>
          <UserDetail/>
        </UserContext>
      </div>
    )
  }
}
