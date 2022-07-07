import React, { Component } from 'react'
import CSSTransitionDemo from './transition/CSSTransitionDemo'
import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
import TransitionGroupDemo from './transition/TransitionGroupDemo'

export default class App extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <CSSTransitionDemo/>
        <SwitchTransitionDemo/>
        <TransitionGroupDemo/>
      </div>
    )
  }
}
