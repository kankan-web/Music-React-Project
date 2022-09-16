import React, { memo, useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {SONG_PLAYLIST_ID} from '@/common/contants'
import {getSettleSingerAction} from '../../store/actionCreators'

import {ArtistHeaderLine,SingerCover} from '../artist-composition/index'
import {SettleSingerWrapper} from './style'

export default memo(function MYSettleSinger() {
  // redux hook
  const { settleSinger } = useSelector(
    state => ({
      settleSinger: state.getIn(['recommend', 'settleSinger']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  //other hook
  useEffect(()=>{
    dispatch(getSettleSingerAction(SONG_PLAYLIST_ID))
  },[dispatch])
  return (
    <SettleSingerWrapper>
      <ArtistHeaderLine titleSlot="入驻歌手" rightSlot="查看全部 >"></ArtistHeaderLine>
      <div className='singer-container'>
        {
          settleSinger&&settleSinger.map(item=>{
            return <SingerCover key={item.id} info={item}/>
          })
        }
      </div>
    </SettleSingerWrapper>
  )
})
