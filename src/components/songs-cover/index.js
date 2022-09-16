import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {SongsCoverWrapper} from './style'
import {getCount,getSizeImage} from'@/utils/format-utils'
export default memo(function MYSongsCover(props) {
  const {info,isBy=false} = props
  const id = info.id;
  const picUrl = (info&& (info.picUrl || info.coverImgUrl))
  const name = (info && info.name)
  const playCount = (info && info.playCount) 
  const nikename = (info && info.creator && info.creator.nickname)|| '';
  // const img = (info && info.subscribers[0].avatarUrl)
  return (
    <SongsCoverWrapper>
      <NavLink to={'/songList?id='+id}>
      <div className='cover-top'>
        
          <img src={getSizeImage(picUrl,140)} alt={name}/>
        <div className='cover sprite_covor'>
          <div className='info sprite_covor'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(playCount)}
            </span>
            <i className='sprite_icon play'></i>
          </div>
        </div>
      </div>
      </NavLink>
      {!isBy?
        (
          <NavLink to={{pathname:'/songList',search:'?id='+id }}>
              <div className="cover-bottom">
                {name}
              </div>
          </NavLink>
        ):(
          <div className="cover-bottom">
            <NavLink to={{pathname:'/songList',search:'?id='+id }}>
              <div className='text-nowrap'>{name}</div>
            </NavLink>
            <div className='cover-nikename text-nowrap'>by-{nikename}</div>
            {/* <img className='cover-img' src={img}/> */}
          </div>
        )
      }

    </SongsCoverWrapper>
  )
})
