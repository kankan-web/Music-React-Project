import * as actionTypes from './constant'
import {Map} from 'immutable'
const defaultState =Map({
  currentCategory:'全部',
  category:[],
  categorySongs: {}
})

function reducer(state=defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory);
    case actionTypes.CHANGE_CATEGORY:
      return state.set("category",action.category)
    case actionTypes.CHANGE_CATEGORY_SONGS:
      return state.set('categorySongs',action.categorySongs)
    default:
      return state;
  }
}

export default reducer;