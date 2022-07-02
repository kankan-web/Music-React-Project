import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      friends:[
        {name:'tom',age:18},
        {name:'lucy',age:22},
        {name:'jam',age:15},
      ]
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    if(this.state.friends!==nextState.friends){//数据不同时进行更新
      return true
    }
    return false
  }
  render() {
    return (
      <div>
        <h2>人物列表</h2>
        <ul>
          {
            this.state.friends.map((item,index)=>{
              return <li key={item.name}>{item.name}</li>
            })
          }
        </ul>
        <button onClick={e=>this.insertData()}>添加数据</button>
      </div>
    )
  }
  insertData(){
    // 1.在开发中不推荐这样做
    // const newData = {name:'andy',age:16}
    // this.state.friends.push(newData)
    // this.setState({
    //   friends:this.state.friends
    // })
    // 2.推荐
    const newData = [...this.state.friends]
    newData.push({name:'andy',age:16})
    this.setState({
      friends:newData
    })
  }
}
