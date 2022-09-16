import request from './request';
export function getArtistInfo(src='',type,area){
  return request({
    url:'/artist/list'+src,
    params:{
      type,
      area
    }
  })
}