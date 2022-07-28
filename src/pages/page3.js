import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { subAction,decAction } from '../store/counter/actionCreators'
import {fetchHomeMultidataAction} from '../store/home/actionCreators'

class Page extends PureComponent{
  render(){
        return (
          <div>
            <hr/>
          <h2>Page</h2>
          <h3>当前计数{this.props.counter}</h3>
          <button onClick={e=>this.props.decrement()}>-1</button>
          <button onClick={e=>this.props.subNumber(5)}>-5</button>
          <h1>Banner</h1>
          <ul>
            {
              this.props.banners.map((item,index)=>{
                return <li key={item.acm}>{item.title}</li>
              })
            }
          </ul>
          <h1>Recommends</h1>
          <ul>
            {
              this.props.recommends.map((item,index)=>{
                return <li key={item.acm}>{item.title}</li>
              })
            }
          </ul>
        </div>
        )
        
    }
}
//
const mapStateToProps = state =>{
  return {
    counter:state.counterInfo.counter,
    banners:state.homeInfo.banners,
    recommends:state.homeInfo.recommends
  }
}
//
const mapDispachToProp = dispatch=>{
  return {
    decrement:function(){
      dispatch(decAction());
    },
    subNumber:function(num){
      dispatch(subAction(num))
    },
    getHomeMultidata(){
      dispatch(fetchHomeMultidataAction)
     }
  }
}
export default connect(mapStateToProps,mapDispachToProp)(Page);