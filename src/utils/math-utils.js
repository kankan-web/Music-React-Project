export function getRandomNumber(num){
  return Math.floor(Math.random()*num)
}

export const getFindIdIndex = (arr, findId) => {
  return arr.findIndex(song => song.id === findId)
}

//生成0-9之间的随机数
export function getMinRandomNumber(){
  return Math.floor(Math.random()*10)
}