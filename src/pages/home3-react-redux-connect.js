import axios from 'axios'
import React,{PureComponent} from 'react'
import { connect } from 'react-redux'
import { incAction,addAction } from '../store/counter/actionCreators'
import {changeBannersAction,changeRecommendAction } from '../store/home/actionCreators'

class Home extends PureComponent{
  componentDidMount(){
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(res=>{
      const data = res.data.data
      this.props.changeBanners(data.banner.list)
      this.props.changeRecommends(data.recommend.list)
    })
  }

   render(){
    return (
      <div>
        <h2>Home</h2>
        <h3>当前计数{this.props.counter}</h3>
        <button onClick={e=>this.props.increment()}>+1</button>
        <button onClick={e=>this.props.addNumber(5)}>+5</button>
      </div>
    )
   }
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
    },
    changeBanners(banners){
      dispatch(changeBannersAction(banners))
    },
    changeRecommends(recommends){
      dispatch(changeRecommendAction(recommends))
    }
  }
}

export default connect(mapStateToProps,mapDispachToProp)(Home)
