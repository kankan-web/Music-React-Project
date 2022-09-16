import React, { memo } from 'react'
import {useSelector} from 'react-redux'
import { getSizeImage, parseTime } from '@/utils/format-utils'
import {AlbumInfoWrapper,
        SongDetailWrapper,
        SongerCoverImg
} from './style'
import {usePlayMusic} from '@/hooks/play-music'
export default memo(function AlbumInfo() {
  const {albumInfo} = useSelector((state)=>({
    albumInfo:state.getIn(['album','albumDetail','album'])
  }))
  const id = albumInfo&&albumInfo.id
  const coverPicUrl = albumInfo&&albumInfo.picUrl
  const headerTitle = albumInfo&&albumInfo.name
  const albumName = albumInfo&&albumInfo.artist.name
  const Time = albumInfo&&albumInfo.publishTime&&
                      parseTime(albumInfo.publishTime,'{y}-{m}-{d}')
  const companyName = albumInfo&&albumInfo.company
  //按钮部分
  const playMusic = usePlayMusic()
  return (
      <AlbumInfoWrapper className="flex">
        <SongerCoverImg>
          <img src={getSizeImage(coverPicUrl, 177)} alt="" />
          <span className="coverall msk"></span>
        </SongerCoverImg>
        <SongDetailWrapper>
          <div className="detail-title-wrapper">
            <i className="sprite_icon2"></i>
            <h2 className="detail-title">{headerTitle}</h2>
          </div>
          <p className='intr'>
            <b>歌手:</b>
            <span>
              <a href='#'>{albumName}</a>
            </span>
          </p>
          <p className='intr'>
            <b>发行时间:</b>
             {Time}
          </p>
          <p className='intr'>
            <b>发行公司:</b>
             {companyName}
          </p>
          <div className="controls">
            <div className="sprite_button play" onClick={(e) => playMusic(e,id)}>
              <i className="sprite_button inner">
                <em className="sprite_button play-icon"></em>
                播放
              </i>
            </div>
            <div className="sprite_button favorite">
              <i className="sprite_button inner">
                <em className="sprite_button favorite-icon"></em>
                收藏
              </i>
            </div>
            <div className="sprite_button share">
              <i className="sprite_button inner">
                <em className="sprite_button favorite-icon"></em>
                分享
              </i>
            </div>
            <div className="sprite_button download">
              <i className="sprite_button inner">
                <em className="sprite_button favorite-icon"></em>
                下载
              </i>
            </div>
            <div className="sprite_button comment">
              <i className="sprite_button inner">
                <em className="sprite_button favorite-icon"></em>
              </i>
            </div>
          </div>
        </SongDetailWrapper>
      </AlbumInfoWrapper>
  )
})
