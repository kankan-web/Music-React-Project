// export function addAction(num){
//   return {
//     type:'ADD_NUMBER',
//     num
//   }
// }
import axios from 'axios'
import { 
  ADD_NUMBER,
  SUB_NUMBER,
  INC_NUMBER,
  DEC_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA
} from './constants.js'

export const addAction = (num)=>{
  return {
    type:ADD_NUMBER,
    num
  }
}
export const subAction = (num)=>{
  return {
    type:SUB_NUMBER,
    num
  }
}
export const incAction = ()=>{
  return {
    type:INC_NUMBER,
  }
}
export const decAction = ()=>{
  return {
    type:DEC_NUMBER,
  }
}

export const changeBannersAction = (banners)=>({
  type:CHANGE_BANNERS,
  banners
})

export const changeRecommendAction = (recommends)=>({
  type:CHANGE_RECOMMEND,
  recommends
})

//redux-thunk中定义的action函数
export const getHomeMultidataAction = dispatch =>{
  axios({
    url:'http://123.207.32.32:8000/home/multidata'
  }).then(res=>{
    const data = res.data.data
    this.props.changeBanners(data.banner.list)
    this.props.changeRecommends(data.recommend.list)
  })
}
//redux-sage拦截的action
export const fetchHomeMultidataAction = {
  type:FETCH_HOME_MULTIDATA
}