import * as actionTypes from './constant'
import { getHotSinger,
         getSingerWorks,
         getSingerAlbum,
         getSingerDesc,
         getSingerInfo 
} from '@/services/singer'
//更改当前显示歌手的id
export const changeSingerAction =(id)=>({
  type:actionTypes.CHANGE_SINGER_ID,
  id
})
//更改当前热门歌手 hotsinger
export const changeHotSingerAction=(hotSinger)=>({
  type:actionTypes.CHANGE_HOT_SINGER,
  hotSinger
})
//获取当前热门歌手 network hotsinger
export const getHotSingerAction = ()=>{
  return (dispatch)=>{
    getHotSinger().then(res=>{
      dispatch(changeHotSingerAction(res.artists))
    })
  }
}
//更改当前歌手的热门作品 singerWorks
export const changeSingerWorksAction = (singerWorks)=>({
  type:actionTypes.CHANGE_SINGER_WORKS,
  singerWorks
})
// 获取当前歌手的热门作品 
export const getSingerWorksAction = (id)=>{
  return (dispatch)=>{
    getSingerWorks(id).then(res=>{
      dispatch(changeSingerWorksAction(res.hotSongs))
    })
  }
}
//更改当前歌手的专辑 singerAlbum
export const changeSingerAlbumAction =(singerAlbum)=>({
  type:actionTypes.CHANGE_SINGER_ALBUM,
  singerAlbum
})
//获取当前歌手的专辑
export const getSingerAlbumAction = (id)=>{
  return dispatch=>{
    getSingerAlbum(id).then(res=>{
      dispatch(changeSingerAlbumAction(res.hotAlbums))
    })
  }
}
//更改当前歌手的简介 singerDesc
export const changeSingerDescAction=(singerDesc)=>({
  type:actionTypes.CHNAGE_SINGER_DESC,
  singerDesc
})
export const getSingerDescAction =(id)=>{
  return dispatch=>{
    getSingerDesc(id).then(res=>{
      dispatch(changeSingerDescAction(res))
    })
  }
}
//更改当前歌手的详细信息 singerInfo
export const changeSingerInfoAction = (info)=>({
  type:actionTypes.CHANGE_SINGER_INFO,
  info
})
//获取当前歌手的详细信息
export const getSingerInfoAction = (id)=>{
  return (dispatch)=>{
    getSingerInfo(id).then(res=>{
      dispatch(changeSingerInfoAction(res.data.artist))
    })
  }
}