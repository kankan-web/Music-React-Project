import { Map } from "immutable";
import * as actionTypes from './constant'

const defaultState = Map({
  singerId:'',
  hotSinger:[],
  singerInfo:{},
  singerWorks:[],
  singerAlbum:[],
  singerDesc:{}
})
/**
 * 
 * @param {Array} state 
 */
function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_SINGER_ID: 
      return state.set('singerId',action.id)
    case actionTypes.CHANGE_SINGER_INFO:
      return state.set('singerInfo',action.info)
    case actionTypes.CHANGE_HOT_SINGER:
      return state.set('hotSinger',action.hotSinger)
    case actionTypes.CHANGE_SINGER_WORKS:
      return state.set('singerWorks',action.singerWorks)
    case actionTypes.CHANGE_SINGER_ALBUM:
      return state.set('singerAlbum',action.singerAlbum)
    case actionTypes.CHNAGE_SINGER_DESC:
      return state.set('singerDesc',action.singerDesc)
    default:
      return state
  }
}

export default reducer