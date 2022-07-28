import axios from 'axios'
import { 
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA
} from './constants.js'

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
    console.log(data)
    this.props.changeBanners(data.banner.list)
    this.props.changeRecommends(data.recommend.list)
  })
}
//redux-sage拦截的action
export const fetchHomeMultidataAction = {
  type:FETCH_HOME_MULTIDATA
}