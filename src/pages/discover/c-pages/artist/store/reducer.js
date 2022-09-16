import {Map} from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
  artistCurrentIndex:0,
  artistListInfo:[],
  artistCurrentInfo:[]
})
function reducer(state=defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_ARTIST_CURRENT_INDEX:
      return state.set('artistCurrentIndex',action.index)
    case actionTypes.CHANGE_ARTIST_LIST_INFO:
      return state.set('artistListInfo',action.info)
    case actionTypes.CHANGE_ARTIST_CURRENT_INFO:
      return state.set('artistCurrentInfo',action.item)
    default: return state
  }
}

export default reducer;
