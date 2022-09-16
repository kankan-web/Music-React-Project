import { Map } from "immutable";
import * as actionTypes from './constant'

const defaultState = Map({
  songListId:0,
  songListInfo: {},
  songListPlayList:[],
  songListRecommend:[],
  songListCollector:[],
})
/**
 * 
 * @param {Array} state 
 */
function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_SONG_LIST_ID: 
      return state.set('songListId', action.id)
    case actionTypes.CHANGE_SONG_LIST_INFO:
      return state.set("songListInfo",action.info)
    case actionTypes.CHANGE_SONG_LIST_PLAY_LIST:
      return state.set('songListPlayList',action.playList)
    case actionTypes.CHANGE_SONG_LIST_RECOMMEND:
      return state.set('songListRecommend',action.recommend)
    case actionTypes.CHANGE_SONG_LIST_COLLECTOR:
      return state.set('songListCollector',action.collector)
    default:
      return state
  }
}

export default reducer