import React, { memo, useEffect, useState } from 'react'
import {useSelector,shallowEqual, useDispatch} from 'react-redux'
import qs from 'query-string'
import {
  SongDetailWrapper,
} from './style'
import {getSimilaritySong} from '@/services/player'

export default memo(function HYSongDetail(props) {
  const [songlist,setSonglist] = useState([])

  //redux
  const {currentSongId}=useSelector(state=>({
    currentSongId:state.getIn(['player','currentSong','id'])
  }),shallowEqual)
  // //根据url中的id更改当前歌曲id
  useEffect(()=>{
    //根据当前歌曲的id获取相似歌曲
    getSimilaritySong(currentSongId).then((res)=>{
      setSonglist(res.songs)
    })
  },[currentSongId])

  return (
    <SongDetailWrapper>
      <div className='content wrap-v2'>
      </div>
    </SongDetailWrapper>
  )
})
