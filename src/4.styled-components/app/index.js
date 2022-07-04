import React, { PureComponent } from 'react'
import styled,{ThemeProvider} from 'styled-components'
import Home from '../home'
import Profile from '../profile'

const HTButton = styled.button`
  padding: 10px 20px;
  border-color:red;
  color:red;
`
// const HTPrimaryButton = styled.button`
//   padding: 10px 20px;
//   color:#fff;
// `
const HTPrimaryButton = styled(HTButton)`
   color:#fff;
   background-color: green;
 `
export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{themeColor:'yellow',fontSize:"30px"}}>
        App
        <h2>我是App的title</h2>
        <hr/>
        <Home/>
        <hr/>
        <Profile/>
        <hr/>
        <HTButton>我是按钮</HTButton>
        <HTPrimaryButton>我是按钮</HTPrimaryButton>
      </ThemeProvider>
    )
  }
}
