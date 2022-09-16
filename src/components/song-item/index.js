import React, { memo } from 'react'
import {useSelector,shallowEqual} from 'react-redux'
import { NavLink } from 'react-router-dom'

import { useAddPlaylist } from '@/hooks/change-music'
import {usePlayMusic} from '@/hooks/play-music'

import { PlayCircleOutlined } from '@ant-design/icons'
import { message } from 'antd'
import {getSizeImage} from '@/utils/format-utils'
import { SongItemWrapper } from './style'
export default memo(function SongItem(props) {

  const {currentRanking,
         coverPic,
         duration,
         songName,
         singer,
         className,
         alia,
         songId
        } = props
  // redux hook
  const {playlist} = useSelector(state => ({
    playlist: state.getIn(['player', 'playList'])
  }), shallowEqual)
  //other hook
  const playMusic =usePlayMusic()//播放音乐
  const addPlaylist = useAddPlaylist(playlist, message)//添加音乐到列表
  return (
    <SongItemWrapper className={className} isPic={coverPic}>
      <div className='song-item rank-count'>{currentRanking}</div>
      {
        coverPic && (
         <NavLink to={{
                      pathname:'/song',
                      search:'?id='+songId
                    }}
                  className='song-item'>
           <img src={getSizeImage(coverPic,50)} alt={songName}/>
         </NavLink>
        )
      }
      <div className='song-item song-info'>
        <div className='left-info'>
          <PlayCircleOutlined className="font-active" onClick={e=>playMusic(e,songId)}/>
          <NavLink to={{
                      pathname:'/song',
                      search:'?id='+songId
                    }} 
                    className='text-nowrap'>
                    {songName}
          </NavLink>
          {alia&&<span className='font-alia text-nowrap'>&nbsp;-&nbsp;{alia}</span>}
        </div>
      </div>
      <div className='song-operator'>
        <div className='song-item duration'>{duration}</div>
        <div className='operator'>
            <button className="sprite_02 btn play" onClick={e=>playMusic(e,songId)}
            ></button>
            <button className='sprite_icon2 btn addto' onClick={e=>addPlaylist(e,songId)}
            ></button>
            <button className='sprite_02 btn favor'
            ></button>
        </div>
      </div>
      <div className='song-item singer'>{singer}</div>
    </SongItemWrapper>
  )
})
