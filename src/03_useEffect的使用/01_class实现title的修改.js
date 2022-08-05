import React from 'react'

import React, { PureComponent } from 'react'

export default class ClassChangeTitle extends PureComponent {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    document.title = this.state.counter;
  }
  componentDidUpdate(){
    document.title = this.state.counter;
  }
  render() {
    return (
      <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e=>this.setState({counter:this.state.counter+1})}>
        +1
      </button>
    </div>
    )
  }
}
