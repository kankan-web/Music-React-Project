import { getToplistInfo,getToplistDetail } from "@/services/ranking"
import * as actionTypes from './constants'

//榜单部分
// 改变榜单数据Action
const changeToplistAction = (toplistInfo) => ({
  type: actionTypes.CHANGE_TOPLIST_COUNT,
  toplistInfo,
})
// 榜单基本名称 network
export const getToplistInfoAction = ()=>{
  return (dispatch)=>{
    getToplistInfo().then((res)=>{
      dispatch(changeToplistAction(res.list))
    })
  }
}

//改变当前榜单的索引值Index Action
export const changeCurrentIndexAction =(index)=>({
  type:actionTypes.CHANGE_CURRENT_INDEX,
  index
})

// 改变当前歌单的ID Action
export const changeCurrentToplistIdAction = (id) => ({
  type: actionTypes.CHANGE_CURRENT_TOPLIST_ID,
  id,
})

// 改变榜单标题详情Action
const changeToplistTitleInfo = (titleInfo) => ({
  type: actionTypes.CHANGE_CURRENT_TOPLIST_TITLE_INFO,
  titleInfo,
})
// 榜单标题信息 network
export const getToplistTitleInfoAction = (id) => {
  return (dispatch) => {
    getToplistDetail(id).then((res) => {
      // 取出榜单标题详情信息
      const {
        coverImgUrl,
        name,
        trackNumberUpdateTime,
        playCount,
        subscribedCount,
        commentCount,
        shareCount,
      } = res && res.playlist
      const toplistTitleInfo = {
        coverImgUrl,
        name,
        trackNumberUpdateTime,
        playCount,
        subscribedCount,
        commentCount,
        shareCount,
      }
      dispatch(changeToplistTitleInfo(toplistTitleInfo))
    })
  }
}

//获取当前榜单的所有歌曲信息 Action
const changeCurrentToplist = (currentToplist)=>({
  type:actionTypes.CHANGE_CURRENT_TOPLIST,
  currentToplist:currentToplist
})
//获取当前榜单的所有歌曲信息 request
export const getToplistItemAction = (id) => {
  return (dispatch) => {
    getToplistDetail(id).then((res) => {
        // 榜单列表详情信息
        const currentToplist = res && res.playlist && res.playlist.tracks
      dispatch(changeCurrentToplist(currentToplist))
    })
  }
}