import React, { memo , useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
//引入
import {HOT_RECOMMEND_LIMIT} from '@/common/contants'
import {HotRecommendWrapper} from './style'
import { getHotRecommendAction } from '../../store/actionCreators'
//组件
import MYThemeHeaderRCM from '@/components/theme-header-rcm'
import HYSongsCover from '@/components/songs-cover'
export default memo(function MYHotRecommend() {
  //state

  //redux hooks
  const {hotRecommends} = useSelector(state=>({
    hotRecommends:state.getIn(['recommend','hotRecommends'])
  }),shallowEqual)
  const dispatch = useDispatch()
  
  //other hooks
  useEffect(()=>{
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  },[dispatch])

  return (
    <HotRecommendWrapper>
      <MYThemeHeaderRCM title='热门推荐' src="/discover/songs" keywords={['华语','流行','民谣','摇滚','电子']}/> 
      <div className='recommend-list'>
        {
          hotRecommends.map((item,index)=>{
            return <HYSongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
