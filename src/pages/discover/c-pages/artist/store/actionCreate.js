import { getArtistInfo,getToplistDetail } from "@/services/artist"
import * as actionTypes from './constants'
import {artistCategory} from '@/common/local-data'
//更改所有类别的歌手列表
export const changeArtistInfo = (info)=>({
  type:actionTypes.CHANGE_ARTIST_LIST_INFO,
  info
})
//改变当前榜单的索引值index action
export const changeCurrentIndexAction = (index)=>({
  type:actionTypes.CHANGE_ARTIST_CURRENT_INDEX,
  index
})
//改变当前榜单的id action
export const changeCurrentArtistListIdAction = (id)=>({
  type:actionTypes.CHANGE_ARTIST_CURRENT_INDEX,
  id
})
//改变当前榜单的数据 action
export const changeArtistCurrentInfo = (item)=>({
  type:actionTypes.CHANGE_ARTIST_CURRENT_INFO,
  item
})
//更改当前榜单的数据network
export const getArtistCurrentInfoAction = (id)=>{
  let src=artistCategory[id].src || ''
  let type=artistCategory[id].type
  let area = artistCategory[id].area
  return (dispatch)=>{
    getArtistInfo(src,type,area).then((res)=>{
      dispatch(changeArtistCurrentInfo(res.artists))
    })
  }
}
//获取所有类别的歌手network
export const getArtistInfoAction = (arr)=>{
  let artistArr = [];
  arr.map((item)=>{
    let src=item.src || ''
    getArtistInfo(src,item.type,item.area).then((res)=>{
      artistArr.push(res.artists)
    })
  })
  return (dispatch)=>{
    dispatch(changeArtistInfo(artistArr))
  }
}

