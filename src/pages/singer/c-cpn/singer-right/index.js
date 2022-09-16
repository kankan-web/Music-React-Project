import React, { memo } from 'react'
import {useSelector,shallowEqual} from 'react-redux'
import {SingerRightWrapper } from './style'
import SongDownload from '@/components/song-download'
import {ArtistHeaderLine,ImgCover} from '@/components'
export default memo(function SingerRight() {
  const {hotSingList} = useSelector(state=>({
    hotSingList:state.getIn(['singer','hotSinger'])
  }),shallowEqual)
  return (
    <SingerRightWrapper>
      <div className='hot-singer clear'>
        <ArtistHeaderLine titleSlot='热门歌手'/>
        {
          hotSingList&&hotSingList.map((item,index)=>{
            return (
              <ImgCover key={item.id} 
                        info={item} 
                        isShowTitle={true} 
                        src={'/singer/hotworks?id='+item.id}></ImgCover>
            )
          })
        }
      </div>
      <SongDownload/>
    </SingerRightWrapper>
  )
})
