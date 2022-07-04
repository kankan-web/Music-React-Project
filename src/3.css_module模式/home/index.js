import React, { PureComponent } from 'react'
import homeStyle from './style.module.css'
export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>我是轮播图</h2>
        <div className={homeStyle.banner}>我是轮播图中的内容</div>
      </div>
    )
  }
}
