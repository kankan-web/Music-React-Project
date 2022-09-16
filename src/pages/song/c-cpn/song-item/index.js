import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'
// import { NavLink } from 'react-router-dom'

import { useAddPlaylist } from '@/hooks/change-music'
import { usePlayMusic } from '@/hooks/play-music'
// import { getSizeImage } from '@/utils/format-utils.js'

import { SongItemWrapper,SongItemLeft,SongItemRight } from './style'
import { PlayCircleOutlined } from '@ant-design/icons'
import { message } from 'antd'


function SongItem(props) {
  // props/state
  const {
    // currentRanking,
    // coverPic,
    // duration,
    singer,
    songId,
    songName,
    // className = '',
  } = props

  //other function
  const { playlist } = useSelector(
    (state) => ({
      playlist: state.getIn(['player', 'playList']),
    }),
    shallowEqual)
  const playMusic = usePlayMusic()
  const addPlaylist = useAddPlaylist(playlist, message)

  return (
    <SongItemWrapper>
      <SongItemLeft className='text-nowrap'>
        <div className='song-name text-nowrap'>{songName}</div>
        <p className='song-singer text-nowrap'>{singer}</p>
      </SongItemLeft>
      <SongItemRight>
          <PlayCircleOutlined
            className="font-active"
            onClick={(e) => playMusic(e,songId)}
          />
          <button
            href="/discover/recommend"
            className="sprite_icon2 btn addto"
            onClick={(e) => addPlaylist(e, songId)}
          ></button>
      </SongItemRight>
    </SongItemWrapper>
  )
}

SongItem.propTypes = {
  currentRanking: propTypes.number.isRequired,
  coverPic: propTypes.string,
  // duration: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
  songId: propTypes.number.isRequired,
  className: propTypes.string,
  songName: propTypes.string.isRequired,
}

export default memo(SongItem)
