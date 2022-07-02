import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state ={
      username:'',
      password:'',
      valid:''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <label htmlFor='username'>
            用户:<input 
                  type='text' 
                  id="username"
                  name="username"
                  onChange={e=>this.handleChange(e)}
                  value={this.state.username}
                  />
          </label>
          <br/>
          <label htmlFor='password'>
            密码:<input 
                  type='text' 
                  id="password"
                  name="password"
                  onChange={e=>this.handleChange(e)}
                  value={this.state.password}
                  />
          </label>
          <br/>
          <label htmlFor='valid'>
            验证:<input 
                  type='text' 
                  id="valid"
                  name="valid"
                  onChange={e=>this.handleChange(e)}
                  value={this.state.valid}
                  />
          </label>
          <br/>
          <input type='submit' value="提交"/>
        </form>
      </div>
    )
  }
  handleSubmit(event){
    const {username,password,valid} = this.state
    event.preventDefault();
    console.log('username',username,'password',password,'valid',valid)
  }
  handleChange(event){
    this.setState({
      // 计算属性名
      [event.target.name]:event.target.value
    })
  }
}
