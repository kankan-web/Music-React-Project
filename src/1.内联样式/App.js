import React, { Component } from 'react'

export default class App extends Component {
  render() {
    const pStyle ={
      color:'orange',
      textDecoration:'underline'
    }
    return (
      <div>
        <h2 style={{fontSize:'50px',color:'red'}}>我是标题</h2>
        <p style={pStyle}>我是一段文字描述</p>
      </div>
    )
  }
}
