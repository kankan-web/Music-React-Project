import React, { PureComponent,createContext } from 'react'
const UserContext = createContext({
  nickname:"默认",
  level:-1,
  region:"中国"
})
class Home extends PureComponent{
  render(){
    return (
      <UserContext.Consumer>
      {
        user =>{
          return <h2>Home:{`昵称:${user.nickname} 等级:${user.level} 地区:${user.region}` }</h2>
        }
      }
    </UserContext.Consumer>
    )
  }
}
class About extends PureComponent{
  render(){
    return (
      <UserContext.Consumer>
    {
      user=>{
        return <h2>About:{`昵称:${user.nickname} 等级:${user.level} 地区:${user.region}` }</h2>
      }
    }
  </UserContext.Consumer>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (

      <div>
        App
        <UserContext.Provider value={{nikename:'why',level:18,region:'中国'}}>
        <Home/>  
        <About/>  
        </UserContext.Provider>
      </div>
    )
  }
}
