import { 
  ADD_NUMBER, 
  SUB_NUMBER,
  INC_NUMBER,
  DEC_NUMBER,
  CHANGE_BANNERS, 
  CHANGE_RECOMMEND 
} 
from "./constants.js";

// 进行reducer方面的处理
const defaultState = {
  counter:0,
  banners:[],
  recommends:[]
}

// function reducer(state=defaultState,action){
//   switch(action.type){
//     case ADD_NUMBER:
//       return {...state,counter:state.counter+action.num};
//     case SUB_NUMBER:
//       return {...state,counter:state.counter-action.num};
//     case INC_NUMBER:
//       return {...state,counter:state.counter+1};
//     case DEC_NUMBER:
//       return {...state,counter:state.counter-1};
//     case CHANGE_BANNERS:
//       return {...state,banners:action.banners};
//     case CHANGE_RECOMMEND:
//       return {...state,recommends:action.recommends}
//     default:
//       return state;
//   }
// }

// 拆分counterReducer
const initialCounterState = {
  counter:0
}
function counterReducer(state=initialCounterState,action){
  switch(action.type){
        case ADD_NUMBER:
          return {...state,counter:state.counter+action.num};
        case SUB_NUMBER:
          return {...state,counter:state.counter-action.num};
        case INC_NUMBER:
          return {...state,counter:state.counter+1};
        case DEC_NUMBER:
          return {...state,counter:state.counter-1};
        default:
          return state
  }
}
// 拆分homeReducer
const initialHomeState = {
  banners:[],
  recommends:[]
}
function homeReducer(state=initialHomeState,action){
  switch(action.type){
        case CHANGE_BANNERS:
          return {...state,banners:action.banners};
        case CHANGE_RECOMMEND:
          return {...state,recommends:action.recommends}
        default:
          return state;
      }
}
function reducer(state={},action){
  return {
    counterInfo:counterReducer(state.counterInfo,action),
    homeInfo:homeReducer(state.homeInfo,action)
  }
}
export default reducer;