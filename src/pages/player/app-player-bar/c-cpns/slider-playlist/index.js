import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {CloseOutlined,HeartOutlined,ClearOutlined } from '@ant-design/icons'

import {
  SliderPlaylistWapper,
  SliderPlaylistHeader,
  SliderPlaylistMain
} from './style'
import PlayListItem from './c-cpns/playlist-item'
import LyricContent from './c-cpns/lyric-content'
import { getSongDetailAction } from '../../../store/actionCreators'

export default memo(function SliderPlaylist(props) {
  //1.props
  const {
    isShowSlider,
    playListCount,
    closeWindow,
    playMusic
  } = props

  //redux hook
  const dispatch = useDispatch();
  const {currentSong,playList,currentSongIndex} = useSelector(
    (state)=>({
      currentSong:state.getIn(['player','currentSong']),
      playList:state.getIn(['player','playList']),
      currentSongIndex:state.getIn(['player','currentSongIndex']),
    }),
    shallowEqual
  )
  //其他功能函数

  //点击item播放音乐
  const clickItem = (item,index)=>{
    dispatch(getSongDetailAction(item.id))
    playMusic();
  }

  return (
    <SliderPlaylistWapper
      style={{ visibility: isShowSlider ? 'visible' : 'hidden' }}
      // 阻止事件冒泡
      onClick={(e) => e.stopPropagation()}
    >
      <SliderPlaylistHeader>
        <div className='playlist-header-left'>
          <h3 className="header-title">播放列表({playListCount})</h3>
          <div>
            <a href='/todo' 
               className='header-icon'
               onClick={e=>e.preventDefault()}>
              <HeartOutlined/>
              <span>收藏一下</span>
            </a>
            <a href='/todo' 
               className='header-icon'
               onClick={e=>e.preventDefault()}>
              <ClearOutlined/>
              <span>清除播放列表</span>
            </a>
          </div>
        </div>
        <div className='playlist-header-right'>
          <div className="song-name">{currentSong.name}</div>
          <div className="close-window" onClick={closeWindow}>
            <CloseOutlined />
          </div>
        </div>
      </SliderPlaylistHeader>
      <SliderPlaylistMain>
        <div className='main-playlist'>
          {
            playList
            &&
            playList.map((item,index)=>{
              return <PlayListItem 
                      key={item.id}
                      songName ={item.name}
                      songId={item.id}
                      singer={item.ar[0].name}
                      duration={item.dt}
                      clickItem={e=>clickItem(item,index)}
                      />
            })
          }
        </div>
        <div className='main-line'></div>
        <LyricContent/>
      </SliderPlaylistMain>
    </SliderPlaylistWapper>
  )
})
