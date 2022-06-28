import React, { Component } from 'react'
// 1.创建Context对象
const UserContext=React.createContext({
  nickName:"aaa",
  level:-1
})
class ProfileHeader extends Component{
  render(){
    return (
      <div>
        <h2>用户昵称:{this.context.nickName}</h2>
        <h2>用户等级:{this.context.level}</h2>
      </div>
    )
  }
}
// 2.设置ProfileHeader.contextType的指向
ProfileHeader.contextType = UserContext;

function Profile(props){
  return (
    <div>
      <ProfileHeader/>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
        <li>设置6</li>
      </ul>
    </div>
  )
}
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nickName:'tom',
      level:99
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile></Profile>
        </UserContext.Provider>
      </div>
    )
  }
}
