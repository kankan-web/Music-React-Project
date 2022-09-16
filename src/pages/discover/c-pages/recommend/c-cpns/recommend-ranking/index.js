import React, { memo, useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'
import {RankingWrapper} from './style'

import MYThemeHeaderRCM from '@/components/theme-header-rcm'
import MYTopRanking from'@/components/top-ranking'
export default memo(function MYRecommendRanking() {
  //redux hooks
  const {upRanking,newRanking,originRanking} = useSelector(state=>({
    upRanking:state.getIn(['recommend','upRanking']),
    newRanking:state.getIn(['recommend','newRanking']),
    originRanking:state.getIn(['recommend','originRanking'])
  }),shallowEqual)

  const dispatch = useDispatch();

  //other hooks
  useEffect(()=>{
    dispatch(getTopListAction(19723756))//飙升榜
    dispatch(getTopListAction(3779629))//新歌榜
    dispatch(getTopListAction(2884035))//热歌榜
  },[dispatch])
  return (
    <RankingWrapper>
      <MYThemeHeaderRCM title="榜单" src='/discover/ranking'/>
      <div className='tops'>
        <MYTopRanking info={upRanking} src='/discover/ranking?id=19723756'/>
        <MYTopRanking info={newRanking} src='/discover/ranking?id=3779629'/>
        <MYTopRanking info={originRanking} src='/discover/ranking?id=2884035'/>
      </div>
    </RankingWrapper>
  )
})
