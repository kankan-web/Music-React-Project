import { 
  ADD_NUMBER, 
  SUB_NUMBER,
  INC_NUMBER,
  DEC_NUMBER,
} 
from "./constants.js";

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

export default counterReducer;