// export function addAction(num){
//   return {
//     type:'ADD_NUMBER',
//     num
//   }
// }
import { 
  ADD_NUMBER,
  SUB_NUMBER,
  INC_NUMBER,
  DEC_NUMBER,
} from './constants.js'

export const addAction = (num)=>{
  return {
    type:ADD_NUMBER,
    num
  }
}
export const subAction = (num)=>{
  return {
    type:SUB_NUMBER,
    num
  }
}
export const incAction = ()=>{
  return {
    type:INC_NUMBER,
  }
}
export const decAction = ()=>{
  return {
    type:DEC_NUMBER,
  }
}

