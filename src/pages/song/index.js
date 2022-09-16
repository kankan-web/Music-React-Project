import React, { memo, useEffect, useState } from 'react'
import {useSelector,shallowEqual, useDispatch} from 'react-redux'
import qs from 'query-string'
//工具包
import {
  SongDetailWrapper,
  SongLeft,
  SongRight,
} from './style'
import { 
  changeShowCurrentSongId,
  getShowCurrentSongDetail,
  getShowCurrentSongLyricList
} from './store/actionCreators'
import {getSimilaritySong} from '@/services/song'
//组件
import SongInfo from './c-cpn/song-info'
import SongComment from './c-cpn/song-comment'
import SongDownload from '@/components/song-download'
import SongItem from './c-cpn/song-item'
export default memo(function HYSongDetail(props) {
  const [songlist,setSonglist] = useState([])
  //redux
  const dispatch = useDispatch()
  const {currentSongId} = useSelector(state=>({
    currentSongId:state.getIn(["song",'showCurrentSongId']),
  }),shallowEqual)

  //根据url中的id更改当前歌曲id
  useEffect(()=>{
    let {id}=qs.parse(props.location.search)
    id = id?id:currentSongId
    dispatch(changeShowCurrentSongId(id))
    dispatch(getShowCurrentSongDetail(id))
    dispatch(getShowCurrentSongLyricList(id))
  },[currentSongId,dispatch,props])

  //other hook
  useEffect(()=>{
    //根据当前歌曲的id获取相似歌曲
    getSimilaritySong(currentSongId).then((res)=>{
      setSonglist(res.songs)
    })
  },[currentSongId])

  return (
    <SongDetailWrapper>
      <div className='content wrap-v2'>
        <SongLeft>
          <SongInfo/>
          <SongComment/>
        </SongLeft>
        <SongRight>
          <div className='similar-playlist'>
            <div className='header'>相似歌曲</div>
            <div className='similar-playlist-main'>
            {
                songlist && songlist.map((item,index)=>{
                  return (
                    <SongItem key={item.id}
                              currentRanking={index + 1}
                              className="song_item"
                              // coverPic={index < 3?item.al.picUrl:''}
                              // duration={formatMinuteSecond(item.dt)}
                              songName={item.name}
                              singer={item.artists[0].name}
                              songId={item.id}/>
                  )
                })
              }
            </div>
          </div>
          <SongDownload/>
        </SongRight>
      </div>
    </SongDetailWrapper>
  )
})
