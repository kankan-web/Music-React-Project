import React, { memo,useEffect } from 'react'
import {useDispatch} from 'react-redux'

import { getSongList } from './store/actionCreate'
import { SongsWrapper } from './style'

import MYSongHeader from './c-cpns/song-header'
import MYSongList from './c-cpns/song-list'
export default memo(function MYSongs() {
  const dispatch = useDispatch()
    //hooks
    useEffect(()=>{
      dispatch(getSongList(0))
    },[dispatch])
  return (
    <SongsWrapper className='wrap-v2'>
      <MYSongHeader/>
      <MYSongList />
    </SongsWrapper>
  )
})
