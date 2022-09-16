import React, { memo, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import qs from 'query-string'
import {useSelector,shallowEqual} from 'react-redux'
import { renderRoutes } from 'react-router-config'

import {
  changeSingerAction,
  getHotSingerAction,
  getSingerInfoAction,
  getSingerWorksAction,
  getSingerAlbumAction,
  getSingerDescAction
} from './store/actionCreate'

import SingerNavBar from '@/components/singer-nav-bar'
import AppNavBar from '@/components/nav-bar/index'
import SingerRight from './c-cpn/singer-right'
import {SingerWrapper,
        SingerContent,
        SingerLeftWrapper,
        SingerMain,
        SingerHeader
} from './style'

export default memo(function MYSinger(props) {
  const {id} = qs.parse(props.location.search)//获取歌手的id
  const {route}=props
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeSingerAction(id))//保存当前的id
    dispatch(getHotSingerAction())//获取当前热门歌手
    dispatch(getSingerInfoAction(id))//获取当前歌手的详细信息
    dispatch(getSingerWorksAction(id))//获取当前歌手的热门作品
    dispatch(getSingerAlbumAction(id))//获取当前歌手的专辑
    dispatch(getSingerDescAction(id))//获取当前歌手的简介
  },[dispatch,id])

  const {singerInfo,singerId} = useSelector(state=>({
    singerInfo:state.getIn(['singer','singerInfo']),
    singerId:state.getIn(['singer','singerId'])
  }),shallowEqual)

  const name = singerInfo&&singerInfo.name
  const img = singerInfo&&singerInfo.cover

  return (
    <SingerWrapper>
      {/* 导航栏 */}
      <AppNavBar/>
      {/*内容部分*/}
      <SingerContent className='wrap-v2'>
        {/* 左边部分 */}
        <SingerLeftWrapper>
          <SingerHeader>
            <div>
              <h2>{name}</h2>
              <h3></h3>
              <img src={img+'?param=640y300'}/>
            </div>
          </SingerHeader>
          <SingerMain>
            <SingerNavBar id={singerId}/>
            {route&& renderRoutes(route.routes)}
          </SingerMain>
        </SingerLeftWrapper>
        {/* 右边部分 */}
        <SingerRight/>
      </SingerContent>
    </SingerWrapper>
  )
})
