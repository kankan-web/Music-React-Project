import { DeleteOutlined, DownloadOutlined, GithubFilled, LikeOutlined } from '@ant-design/icons'
import React, { memo } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import { PlayListItemWapper } from './style'

//工具
import {formatDate} from '@/utils/format-utils'
import {changePlayListAndCount} from '@/pages/player/store/actionCreators'
export default memo(function PlayListItem(props) {
  //props
  const {songName,singer,duration,songId,clickItem} = props

  // redux hook
  const dispatch = useDispatch()
  const {playList} = useSelector(state => ({
    playList: state.getIn(['player', 'playList'])
  }),shallowEqual)

  // 功能函数
  //删除点击的歌曲
  const delectCurrentSong =(e)=>{
    e.stopPropagation()
    const currentSongIndex = playList.findIndex(song=>song.id===songId)
    if(playList.length ===1) return
    playList.splice(currentSongIndex,1)
    //需要修改播放列表并且修改歌曲数量
    dispatch(changePlayListAndCount(playList))
  }
  return (
    <PlayListItemWapper onClick={clickItem}>
      <h4 className='song-name'>{songName}</h4>
      <div className='song-control'>
        <LikeOutlined/>
        <GithubFilled/>
        <DownloadOutlined/>
        <DeleteOutlined onClick={e=>delectCurrentSong(e)}/>
      </div>
      <div className='song-info'>
        <span>{singer}</span>
        <span>{formatDate(duration,"mm:ss")}</span>
      </div>
    </PlayListItemWapper>
  )
})
