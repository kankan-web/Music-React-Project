import React, { Component } from 'react'
import NavBar from './NavBar'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
            <strong>bbb</strong>
            <strong>aaa</strong>
            <strong>ccc</strong>
        </NavBar>
        <NavBar leftSlot={<strong>bbb</strong>}
                centerSlot={<strong>ccc</strong>}
                rightSlot={<a href='/#'>ccc</a>}
        ></NavBar>
      </div>
    )
  }
}
