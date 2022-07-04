import React, { PureComponent } from 'react'
import styled from 'styled-components'
/*
  特点:
  1.props穿透
*/
const HTInput = styled.input.attrs({
  placeholder:'codewhy',
  bColor:'red'
})`
  background-color: lightblue;
  border-color: ${props=>props.bColor};
  color:${props=>props.Color};
`
export default class Profile extends PureComponent {
  constructor(props){
    super(props)
    this.state ={
      color:'purple'
    }
  }
  render() {
    return (
      <div>
        <h2>我是home的标题</h2>
        <HTInput type='text'/>
        <HTInput Color={this.state.color} type='text'/>
        <ul>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}
