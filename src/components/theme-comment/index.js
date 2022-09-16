import { Comment, Avatar, Form, Button, Input, message } from 'antd'
import React from 'react'

const { TextArea } = Input

const Editor = ({ onChange, onSubmit, submitting, value, onFocus }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} onFocus={(e) => onFocus(e)} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        评论
      </Button>
    </Form.Item>
  </>
)

export default class ThemeComment extends React.Component {
  constructor(props) {
    super()
    this.state = {
      comments: [],
      submitting: false,
      value: '',
      avatar: props.photo
        ? props.photo
        : 'https://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50',
    }
  }

  handleSubmit = () => {
    if (!this.state.value) {
      message.warning('请输入评论内容')
      return
    }

    // this.setState(
    //   {
    //     submitting: true,
    //   },
    //   () => {
    //     // 调登录接口
    //     sendSongComment(this.props.id, this.state.value, this.props.cookie).then((res) => {
    //       console.log('res :>>>', res)
    //     })
    //   }
    // )
    this.props.callbackOk(this.state.value)
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  handleFocus = (e) => {
    !this.props.isLogin && e.target.blur()
    this.props.onFocus(this.state.value)
  } 


  render() {
    const { submitting, value, avatar } = this.state
    return (
      <>
        <Comment
          avatar={<Avatar src={avatar} alt="Han Solo" shape="square" size="large"/>}
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
              onFocus={(e) => this.handleFocus(e)}
            />
          }
        />
      </>
    )
  }
}
