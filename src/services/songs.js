import request from './request';
//歌单分类
export function getSongCategory(){
  return request({
    url:'/playlist/catlist'
  })
}

export function getSongCategoryList(cat="全部", offset=0, limit = 36) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}

/* 收藏歌单, 传递歌单id */
export function sendCollectSonglist(id, cookie) {
  return request({
    url: "/playlist/subscribe",
    params: {
      t: 1,
      id,
      cookie
    }
  })
}