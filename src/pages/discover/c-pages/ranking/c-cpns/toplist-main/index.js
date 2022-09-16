import React, { memo, useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'

import {formatMinuteSecond} from '@/utils/format-utils'
import {getToplistItemAction} from '../../store/actionCreators'
import {ToplistMainWrapper} from './style'
import MYThemeHeaderRCM from '@/components/theme-header-rcm'
import SongItem from '@/components/song-item'
export default memo(function ToplistMain() {
  //redux hook
  const dispatch = useDispatch()
  const {currentToplistId,currentToplist} = useSelector((state)=>({
    currentToplistId:state.getIn(['ranking','currentToplistId']),
    currentToplist:state.getIn(['ranking','currentToplist']),
  }),shallowEqual)

  //other hook
  useEffect(()=>{
    dispatch(getToplistItemAction(currentToplistId))
  },[dispatch,currentToplistId])

  // other handle
  const rightSlot = (
    <span>
      播放：<em style={{ color: '#c20c0c' }}>112345</em>次
    </span>
  )
  

  return (
    <ToplistMainWrapper>
      <MYThemeHeaderRCM title="歌曲列表" showIcon={false} right={rightSlot}/>
      <div className='toplist-main'>
        <div className='main-header'>
        <div className="sprite_table header-item"></div>
          <div className="sprite_table header-item header-title">标题</div>
          <div className="sprite_table header-item header-time">时长</div>
          <div className="sprite_table header-item header-singer">歌手</div>
        </div>
        <div className='main-list'>
          {
            currentToplist&&currentToplist.map((item,index)=>{
              return (
                <SongItem key={item.id} 
                          className="song_item"
                          currentRanking={index+1}
                          coverPic={index<3?item.al.picUrl:''}
                          duration={formatMinuteSecond(item.dt)}
                          songName = {item.name}
                          singer={item.ar[0].name}
                          songId={item.id}
                          alia={item.alia[0]}
                          />
              )
            })
          }
        </div>
      </div>
    </ToplistMainWrapper>
  )
})
