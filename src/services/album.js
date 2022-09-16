import request from './request';
//获取专辑的内容
export function getAlbumDetail(id){
  return request({
    url:'/album',
    params:{
      id
    }
  })
}
//获取专辑的评论
export function getAlbumComment(id,limit=20,offset){
  return request({
    url:'/comment/album',
    params:{
      id,
      limit,
      offset,
      timestamp:new Date().getTime()
    }
  })
}
//获取他的其他专辑
export function getOtherAlbum(id){
  return request({
    url:'/artist/album',
    params:{
      id,
      limit:5
    }
  })
}