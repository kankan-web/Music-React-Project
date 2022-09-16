import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils.js'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HotCoverInfoCover = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  .artist-image {
    width: 50px;
    height: 50px;
  }

  .artist-info {
    flex: 1;
    .artist-name {
      width: 140px;
      display: block;
      position: relative;
      color: #000;

      &::after {
        position: absolute;
        top: 2px;
        content: '';
        width: 11px;
        height: 13px;
        background: url(${require('@/assets/img/sprite_icon2.png')});
        background-position: 0 1px;
      }
    }

    .artist-detail {
      display: block;
      width: 140px;
      color: #666;
    }
  }
`

export default memo(function HotCoverInfo(props) {
  const { info,recommend } = props
  const img = (info&&info.picUrl) ||(recommend&&recommend.coverImgUrl)
  const name = (info&&info.name)||(recommend&&recommend.name)
  const nickname = (info&&info.position)||(recommend&&recommend.creator.nickname)
  return (
    <HotCoverInfoCover>
      <div className="artist-image">
        <img src={getSizeImage(img, 40)} alt="" />
      </div>
       {
        info&&(
          <div className="artist-info">
             <div className="artist-name text-nowrap">{name}</div>
             <div className="artist-detail text-nowrap">{nickname}</div>
          </div>
        )||recommend&&(
          <div className="artist-info">
            <NavLink to={{pathname:'/songList',search:'?id='+recommend.id}}
            className="artist-name text-nowrap">{name}</NavLink>
            <NavLink to={{pathname:'/singer',search:'?id='+recommend.creator.userId}} 
            className="artist-detail text-nowrap">{nickname}</NavLink>
          </div>
        )
       }
    </HotCoverInfoCover>
  )
})
