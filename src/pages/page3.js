import React from 'react'
import {connect} from 'react-redux'
import { subAction,decAction } from '../store/actionCreators'

function Page(props) {
    return (
      <div>
        <hr/>
      <h2>Page</h2>
      <h3>当前计数{props.counter}</h3>
      <button onClick={e=>props.decrement()}>-1</button>
      <button onClick={e=>props.subNumber(5)}>-5</button>
      <h1>Banner</h1>
      <ul>
        {
          props.banners.map((item,index)=>{
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>Recommends</h1>
      <ul>
        {
          props.recommends.map((item,index)=>{
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
    )
    
}
const mapStateToProps = state =>{
  return {
    counter:state.counter,
    banners:state.banners,
    recommends:state.recommends
  }
}
const mapDispachToProp = dispatch=>{
  return {
    decrement:function(){
      dispatch(decAction());
    },
    subNumber:function(num){
      dispatch(subAction(num))
    }
  }
}
export default connect(mapStateToProps,mapDispachToProp)(Page);