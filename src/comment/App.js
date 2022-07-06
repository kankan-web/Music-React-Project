import React, { Component } from 'react'
import CommentInput from './components/CommentInput';
import CommentItem from './components/CommentItem';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      commentList:[]
    }
  }
  render() {
    return (
      <>
        {
          this.state.commentList.map((item,index)=>{
            return <CommentItem key={item.id} 
                                comment={item} 
                                removeItem={e=>this.removeComment(index)}/>
          })
        }
        <CommentInput submitComment={this.submitComment.bind(this)}/>
      </>
    )
  }
  submitComment(info){
    this.setState({
      commentList:[...this.state.commentList,info]
    })
  }
  removeComment(index){
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index,1)
    this.setState({
      commentList:newCommentList
    })
  }
}
