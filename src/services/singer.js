import request from './request'
import {getMinRandomNumber} from '../utils/math-utils'
//获取热门歌手
export function getHotSinger(){
  return request({
    url:'/top/artists',
    params:{
      offset:getMinRandomNumber(),
      limit:6
    }
  })
}
//获取歌手的作品
export function getSingerWorks(id){
  return request({
    url:'/artists',
    params:{
      id
    }
  })
}
//获取歌手的专辑
export function getSingerAlbum(id,limit=12,offset){
  return request({
    url:'/artist/album',
    params:{
      id,
      limit,
      offset,
      timestamp:new Date().getTime()
    }
  })
}
//获取歌手的描述
export function getSingerDesc(id){
  return request({
    url:'/artist/desc',
    params:{
      id
    }
  })
}
//获取歌手详情
export function getSingerInfo(id){
  return request({
    url:'/artist/detail',
    params:{
      id
    }
  })
}