import { Map } from "immutable";
import * as actionTypes from './constant'

const defaultState = Map({
  albumId:'',
  albumDetail:{},
  otherAlbum:[]
})
/**
 * 
 * @param {Array} state 
 */
function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_ALBUM_ID: 
      return state.set('albumId',action.id)
    case actionTypes.CHANGE_OTHER_ALBUM:
      return state.set('otherAlbum',action.otherAlbum)
    case actionTypes.CHANGE_ALBUM_DETAIL:
      return state.set('albumDetail',action.detail)    
    default:
      return state
  }
}

export default reducer