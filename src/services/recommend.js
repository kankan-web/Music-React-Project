import request from './request'
//发生网络请求
export function getTopBanners(){
  return request({
    url:'/banner'
  })
}

export function getHotRecommends(limit){
  return request({
    url:'/personalized',
    params:{
      limit
    }
  })
}

export function getNewAlbums(limit){
  return request({
    url:'/top/album',
    params:{
      limit,
    }
  })
}

export function getTopListDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}