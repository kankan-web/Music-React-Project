import * as actionTypes from './constant'
import { 
  getAlbumDetail,
  getAlbumComment,
  getOtherAlbum
} from '@/services/album'
import { type } from '@testing-library/user-event/dist/type'

//更改当前显示歌手的 id
export const changeAlbumIdAction =(id)=>({
  type:actionTypes.CHANGE_ALBUM_ID,
  id
})
//更改当前歌手的其他专辑 otherAlbum
export const changeOtherAlbumAction=(otherAlbum)=>({
  type:actionTypes.CHANGE_OTHER_ALBUM,
  otherAlbum
})
//获取当前歌手的其他专辑 otherAlbum network
export const getOtherAlbumAction = (id)=>{
  return (dispatch)=>{
    getOtherAlbum(id).then(res=>{
      console.log('res',res)
    })
  }
}
//更改当前歌单的详细信息 albumDetail
export const changeAlbumDetailAction=(detail)=>({
  type:actionTypes.CHANGE_ALBUM_DETAIL,
  detail
})
//获取当前歌手的详细信息
export const getAlbumDetailAction = (id)=>{
  return (dispatch)=>{
    getAlbumDetail(id).then(res=>{
      dispatch(changeAlbumDetailAction(res))
    })
  }
}