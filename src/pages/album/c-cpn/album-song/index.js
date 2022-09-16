import React, { memo } from 'react'
import {AlbumSongWrapper} from './style'
import {useSelector,shallowEqual} from 'react-redux'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import ThemePlayist from '@/components/theme-playlist'
export default memo(function AlbumSong() {
  const {playlist} = useSelector((state)=>({
    playlist:state.getIn(['album','albumDetail','songs'])
  }),shallowEqual)

  const renderRightSlot = (
    <span>
      播放：<em style={{ color: '#c20c0c' }}>123456</em>次
    </span>
  )
  return (
    <AlbumSongWrapper>
      <ThemeHeaderRcm
          className="gap"
          title="包含歌曲列表"
          showIcon={false}
          right={renderRightSlot}
        />
        {playlist && <ThemePlayist playlist={playlist} />}
    </AlbumSongWrapper>
  )
})
