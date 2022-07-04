import React, { PureComponent } from 'react'
import './style.css'
export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='title'>我是轮播图</h2>
        <div className='banner'>我是轮播图中的内容</div>
      </div>
    )
  }
}
