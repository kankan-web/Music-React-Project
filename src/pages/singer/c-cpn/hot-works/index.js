import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {HotWorksWrapper} from './style'
import SongItem from '@/components/song-item'
import { formatMinuteSecond } from '@/utils/format-utils.js'
export default memo(function SingerLeft() {
  const {singerWorks} = useSelector((state)=>({
    singerWorks:state.getIn(['singer','singerWorks'])
  }),shallowEqual)
  return (
    <HotWorksWrapper>
      {singerWorks&&singerWorks.map((item,index)=>{
        return (
          <SongItem 
          key={item.id}
          currentRanking={index+1}
          duration={formatMinuteSecond(item.dt)}
          songName={item.name}
          singer={item.ar[0].name}
          songId={item.id}
          />
        )
      })
      }
    </HotWorksWrapper>
  )
})
