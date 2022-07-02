import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movies:["小明","小红"]
    }
  }
  render() {
    return (
      <div>
        <h2>人名列表:</h2>
        <ul>
          {
            this.state.movies.map((item,index)=>{
              return <li key={item}>{item}</li>
            })
          }
        </ul>
        <button onClick={e=>this.AddName()}>添加人名</button>
      </div>
    )
  }
  AddName(){
    this.setState({
      movies:["小黄",...this.state.movies]
    })
  }
}
