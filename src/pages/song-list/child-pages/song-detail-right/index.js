import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {ArtistHeaderLine,HotCoverInfo,ImgCover} from '@/components'
import {SongDetailRightWrapper} from './style'
import SongDownload from '@/components/song-download'
export default memo(function SongDetailRight(props) {

  const {Recommend,Collector} = useSelector((state)=>({
    Recommend:state.getIn(['songListDetail','songListRecommend']),
    Collector:state.getIn(['songListDetail','songListCollector'])
  }),shallowEqual)
  return (
    <SongDetailRightWrapper>
      <div className='like-person clear'>
        <ArtistHeaderLine titleSlot='喜欢这个歌单的人'/>
          {Collector && Collector.map((item,index)=>{
              return <ImgCover key={index} info={item} src=''></ImgCover>
          })}
      </div>
      <div className='HotsongList'>
        <ArtistHeaderLine titleSlot='推荐歌单'/>
        {Recommend && Recommend.map((item,index)=>{
            return <HotCoverInfo key={index} recommend={item}/>
        })}
      </div>
      <SongDownload/>
    </SongDetailRightWrapper>
  )
})
