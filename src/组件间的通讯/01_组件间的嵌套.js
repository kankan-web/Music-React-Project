import React, { Component } from 'react'
function Banner(){
  return <h3>我是Banner组件</h3>
}
function ProductList(){
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}
// Header
function Header(){
  return (
    <div>
      <Banner/>
      <ProductList/>
    </div>
  )
}
// Main
function Main(){
  return <h2>我是Main组件</h2>
}
// Footer
function Footer(){
  return <h2>我是Footer组件</h2>
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
