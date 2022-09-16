import request from './request'

// 歌曲详情网络请求
export function getSongDeatilData(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
//相关歌单推荐
export function getSongListRecommend(id){
  return request({
    url:'/related/playlist',
    params:{
      id
    }
  })
}
//歌单收藏者
export function getSongListCollector(id){
  return request({
    url:'/playlist/subscribers',
    params:{
      id,
      limit:8
    }
  })
}