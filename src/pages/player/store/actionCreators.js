import { getSongDetail,getLyric,getHotComment } from "@/services/player";
import { getRandomNumber } from "../../../utils/math-utils";
import { parseLyric } from "../../../utils/parse-lyric";
import * as actionTypes from './constants';
import { addPlaylistId, setCurrentSongIndex } from '@/utils/localstorage'
// 更改单曲歌曲action
const changeCurrentSongAction =(currentSong)=>({
  type:actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})
// 更改当前播放列表action
const changePlayListAction =(playList)=>({
  type:actionTypes.CHANGE_PLAY_LIST,
  playList
})
// 更改当前播放歌曲的序号action
const changeCurrentSongIndexAction =(index)=>({
  type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})
// 更改当前播放状态action，循环、随机、单曲
export const changeSequenceAction = (sequence)=>({
  type:actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentSong = (tag)=>{
  return (dispatch,getState)=>{
    const playList = getState().getIn(['player','playList']);//获取列表
    const sequence = getState().getIn(['player','sequence']);//获取播放设置
    let currentSongIndex = getState().getIn(['player','currentSongIndex']);
    switch(sequence){
      case 1://随机播放
        let randomIndex = getRandomNumber(playList.length);
        while(randomIndex===currentSongIndex){
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex; 
        break;
      default://顺序播放
        currentSongIndex += tag
        if(currentSongIndex>=playList.length) currentSongIndex=0;
        if(currentSongIndex<0) currentSongIndex = playList.length-1;
    } 
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
      //请求歌词
    dispatch(getLyricAction(currentSong.id))
  }

}

export const changeLyricList= (lyricList)=>({
  type:actionTypes.CHANGE_LYRICS_LIST,
  lyricList
})

export const changeCurrentLyricIndexAction = (index)=>({
  type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

// 修改播放列表并修改歌曲数量
export const changePlayListAndCount =(playlist)=>{
  return (dispatch)=>{
    dispatch(changePlayListAction(playlist))
    dispatch(changePlaylistCountAction(playlist.length))
  }
}

//改变列表歌曲数量
export const changePlaylistCountAction = (count)=>({
  type:actionTypes.CHANGE_CURRENT_LYRIC_COUNT,
  count
})

// 歌曲详情network request
export const getSongDetailAction = (ids)=>{
  return (dispatch,getState)=>{
    //1.根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(['player','playList']);
    const songIndex = playList.findIndex(song=>song.id === ids)
    //2.判断是否找到歌曲
    let song = null
    if(songIndex !== -1){
      //找到歌曲
      //设置当前播放歌曲的currentIndex
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex]
      // 设置当前播放的歌曲
      dispatch(changeCurrentSongAction(song));
      // 请求歌曲的歌词
      dispatch(getLyricAction(song.id))
    }else{
      //没有找到歌曲
      //请求歌曲数据
      getSongDetail(ids).then(res=>{
        //(0)歌曲ID添加到本地存储
        addPlaylistId(ids)
        song = res.songs && res.songs[0];
        if(!song) return;

        //1.将最新请求到的歌曲添加到播放列表
        const newPlayList = [...playList];
        //(1)添加到播放列表中
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));

        //2.更新redux中的值
        //(2)更改当前播放索引
        dispatch(changeCurrentSongIndexAction(newPlayList.length-1));
        //(3)更改当前播放歌曲
        dispatch(changeCurrentSongAction(song))
        //3.请求歌词
        //(4)请求歌曲的歌词
        dispatch(getLyricAction(song.id))
        //(5)更新歌曲数量
        dispatch(changePlaylistCountAction(newPlayList.length))
      })
    }

  }
}

//歌词network request
export const getLyricAction=(id)=>{
  return async(dispatch)=>{
    await getLyric(id).then(res=>{
      const lyric = res.lrc&&res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricList(lyricList))
    })
  }
}


//获取歌曲详情并用于添加到列表
export const getAddSongDetailAction = (id)=>{
  return (dispatch,getState)=>{
    getSongDetail(id).then((res)=>{
      //0.歌曲ID添加到本地存储
      addPlaylistId(id)
      const playList = getState().getIn(['player','playList'])
      //先判断是否已经存在播放列表，如果不存在，再进行添加
      const songIndex = playList.findIndex((song)=>song.id===id);
      if(songIndex!==-1) return //找到了(后续不再执行)
      //获取要添加播放的歌曲信息
      const willAddSong = res.songs && res.songs[0];
      //添加到播放列表
      playList.push(willAddSong)
      //派发action
      dispatch(changePlayListAction(playList))
      dispatch(changePlaylistCountAction(playList.length))
    })
  }
}



