import request from './request'
// 这首歌曲的所有评论
export function getSongComment(id, limit = 20, offset) {
  return request({
    url: '/comment/music',
    params: {
      id,
      limit,
      offset,
      timestamp: new Date().getTime()
    },
  })
}
// 这首歌的热门评论
export function getHotComment(id, type = 0) {
  return request({
    url: '/comment/hot',
    params: {
      id,
      type,
    },
  })
}
// 歌曲
export function getSimilaritySong(songid) {
  return request({
    url: '/simi/song',
    params: {
      id: songid,
    },
  })
}