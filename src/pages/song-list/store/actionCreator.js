// 将网络请求下的数派发到store中
// 调用API将数据保存在store
import * as actionTypes from './constant'
import { getSongDeatilData,
         getSongListRecommend,
         getSongListCollector 
} from '@/services/song-list'

// 歌单详情 action info
export const changeSongInfoAction = (info) => ({
  type: actionTypes.CHANGE_SONG_LIST_INFO,
  info
})
//更改当前显示的歌单 id
export const changeSongListIdAction = (id) => ({
  type: actionTypes.CHANGE_SONG_LIST_ID,
  id
})
//更改当前显示歌单的歌曲列表 playlist
export const changeSongListPlayListAction=(playList)=>({
  type:actionTypes.CHANGE_SONG_LIST_PLAY_LIST,
  playList
})
// 歌单详情 network  (redux-thunk可以让action可以是一个函数)
export const getSongDeailAction = (songDeatilId) => {
  return async(dispatch) => {
    // 调用接口
    const {playlist} = await getSongDeatilData(songDeatilId)
    dispatch(changeSongListPlayListAction(playlist.tracks))
    dispatch(changeSongInfoAction(playlist))
  }
}
//歌单推荐 action songListRecommend
export const changeSongListRecommend =(recommend)=>({
  type:actionTypes.CHANGE_SONG_LIST_RECOMMEND,
  recommend
})
//歌单推荐 network
export const getSongListRecommendAction=(id)=>{
  return (dispatch)=>{
    getSongListRecommend(id).then(res=>{
      dispatch(changeSongListRecommend(res.playlists))
    })
  }
}
//更新喜欢歌单的人 collector
export const changeSongListCollector =(collector)=>({
  type:actionTypes.CHANGE_SONG_LIST_COLLECTOR,
  collector
})
//获取喜欢歌单的人 network
export const getSongListCollectorAction = (id)=>{
  return (dispatch)=>{
    getSongListCollector(id).then(res=>{
      dispatch(changeSongListCollector(res.subscribers))
    })
  }
}

