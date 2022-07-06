import React, { PureComponent } from 'react'
import { Input,Button } from 'antd';
import moment from 'moment'
const { TextArea } = Input;
export default class CommentInput extends PureComponent {
  constructor(props){
    super(props)
    this.state ={
      content:''
    }
  }
  render() {
    return (
      <div style={{width:'500px',padding:'10px 20px'}}>
        <TextArea rows={4} 
                  value={this.state.content} 
                  onChange={e=>this.getChange(e)}/>
        <Button type='primary' 
                style={{marginTop:'10px'}}
                onClick = {e=>this.addContent()}
                >添加评论</Button>
      </div>
    )
  }
  getChange(event){
    this.setState({
      content: event.target.value
    })
  }
  addContent(){
    const commentInfo = {
      id:moment().valueOf(),
      avatar:'https://avatars.githubusercontent.com/u/174685?v=4',
      nikename:'Andy',
      datetime:moment(),
      content:this.state.content
    }
    this.props.submitComment(commentInfo)
    this.setState({
      content:''
    })
  }
}
