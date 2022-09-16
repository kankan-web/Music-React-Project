import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import { SingerAlbumItemWrapper } from './style'
import { getSizeImage, parseTime } from '@/utils/format-utils'
export default memo(function SingerAlbumItem(props) {
  const {info}=props
  const name = info&&info.name;
  const img = info&&info.picUrl;
  const id = info&&info.id;
  const pubicTime = info&&info.publishTime&&parseTime(info.publishTime,'{y}.{m}.{d}')
  return (
    <SingerAlbumItemWrapper>
      <div className='album-img'>
        <img src={img+'?param=120y120'} />
        <NavLink to={'/album?id='+id} className='mask coverall'></NavLink>
        {/* <a href='#' className='sprite_icon player'></a> */}
      </div>
      <p className='album-name'>
        <NavLink to={'/album?id='+id}>{name}</NavLink>
      </p>
      <p className='album-year'>
        <span>{pubicTime}</span>
      </p>
    </SingerAlbumItemWrapper>
  )
})
