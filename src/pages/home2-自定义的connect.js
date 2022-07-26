import React from 'react'
import { connect } from '../utils/connect'
import { addAction,incAction } from '../store/actionCreators'

function Home(props){
    return (
      <div>
        <h2>Home</h2>
        <h3>当前计数{props.counter}</h3>
        <button onClick={e=>props.increment()}>+1</button>
        <button onClick={e=>props.addNumber(5)}>+5</button>
      </div>
    )
}
const mapStateToProps = state =>{
  return {
    counter:state.counter
  }
}
const mapDispachToProp = dispatch=>{
  return {
    increment:function(){
      dispatch(incAction());
    },
    addNumber:function(num){
      dispatch(addAction(num))
    }
  }
}

export default connect(mapStateToProps,mapDispachToProp)(Home)
