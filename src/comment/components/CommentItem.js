import React, { PureComponent } from 'react'
import {Comment,Avatar,Tooltip} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
export default class CommentItem extends PureComponent {
  render() {
    const {nikename,avatar,content,datetime} = this.props.comment;
    return (
      <Comment
      author={<a href='/#'>{nikename}</a>}
      avatar={<Avatar src={avatar} alt="Han Solo" />}
      content={<p>{content}</p>}
      datetime={
        <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
          <span>{datetime.fromNow()}</span>
        </Tooltip>
      }
      actions={
        [<span><DeleteOutlined onClick={e=>this.removeComment()}/>删除</span>]
      }
    />
    )
  }
  removeComment(){
    this.props.removeItem()
  }
}
