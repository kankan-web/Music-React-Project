import { getHotComment } from "@/services/song";
import {getSongDetail,getLyric} from '@/services/player'
import { getRandomNumber } from "../../../utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";
import * as actionTypes from './constants';
import { addPlaylistId, setCurrentSongIndex } from '@/utils/localstorage'

/**-------------------当前展示歌曲的信息------------------*/
//更改当前展示歌曲的id
export const changeShowCurrentSongId = (id)=>({
  type:actionTypes.CHANGE_SHOW_CURRENT_SONG_ID,
  id
})
//更改当前展示歌曲的信息detail
export const changeShowCurrentSongDetail = (detail)=>({
  type:actionTypes.CHANGE_SHOW_CURRENT_SONG_DETAIL,
  detail
})
//获取当前展示歌曲的信息 network
export const getShowCurrentSongDetail = (id)=>{
  return (dispatch,getState)=>{
    getSongDetail(id).then(res=>{
      dispatch(changeShowCurrentSongDetail(res.songs[0]))
    })
  }
}
//更改歌词列表lyricList
export const changeShowCurrentSongLyricList= (lyricList)=>({
  type:actionTypes.CHANGE_SHOW_CURRENT_SONG_LYRIC_LIST,
  lyricList
})
//获取当前展示歌曲的歌词列表
export const getShowCurrentSongLyricList=(id)=>{
  return async(dispatch)=>{
    await getLyric(id).then(res=>{
      const lyric = res.lrc&&res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeShowCurrentSongLyricList(lyricList))
    })
  }
}

//更改当前显示歌曲的热评hotComments
export const changeShowCurrentSongHotComment = (hotComments)=>({
  type:actionTypes.CHANGE_SHOW_CURRENT_SONG_HOT_COMMENT,
  hotComments
})
//获取当前显示歌曲的热评 network
export const getShowCurrentSongHotComment = (id)=>{
  return (dispatch)=>{
    getHotComment(id).then((res) => {
      console.log('hotComment',res)
      const hotComments = res && res.hotComments
      dispatch(changeShowCurrentSongHotComment(hotComments))
  })}
}
//更改当前评论总数 total
export const changeShowCurrentSongCommentTotal = (total)=>({
  type:actionTypes.CHANGE_SHOW_CURRENT_SONG_COMMENT_TOTAL,
  total
})