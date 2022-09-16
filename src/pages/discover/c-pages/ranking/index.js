import React, { memo, useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import qs from 'query-string'
// 其他
import { TopListWrapper,TopListLeft,TopListRight } from './style'
import { getToplistInfoAction,getToplistTitleInfoAction } from './store/actionCreators'
//组件
import TopListItem from './c-cpns/top-list-item'
import TopListTitle from './c-cpns/toplist-title'
import TopListMain from './c-cpns/toplist-main'

export default memo(function MYRanking(props) {
  //redux hook
  const dispatch = useDispatch()
  const { toplistInfo,currentToplistId } = useSelector(
    state=>({
      toplistInfo:state.getIn(['ranking','toplistInfo']),
      currentToplistId:state.getIn(['ranking','currentToplistId'])
    }),
    shallowEqual)
    
  //other hook
  useEffect(()=>{
    //榜单item
    dispatch(getToplistInfoAction())
  },[dispatch])

  // 排行榜头部信息
  useEffect(() => {
    // 派发榜单标题信息Action
    let { id } = qs.parse(props.location.search)
    id = id ? id : currentToplistId
    dispatch(getToplistTitleInfoAction(id))
  }, [currentToplistId, dispatch, props])
  
  return (
    <TopListWrapper className='wrap-bg2'>
      <div className='content wrap-v2'>
        <TopListLeft>
          <div className='top-list-container'>
            <TopListItem toplistInfo={toplistInfo} history={props.history}/>
          </div>
        </TopListLeft>
        <TopListRight>
            <TopListTitle />
            <TopListMain />
        </TopListRight>
      </div>
    </TopListWrapper>
  )
})
