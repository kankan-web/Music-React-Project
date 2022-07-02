import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <label htmlFor='username'>
            用户:<input 
                  type='text' 
                  id="username"
                  onChange={e=>this.handleChange(e)}
                  />
          </label>
          <input type='submit' value="提交"/>
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.username)
  }
  handleChange(event){
    this.setState({
      username:event.target.value
    })
  }
}
