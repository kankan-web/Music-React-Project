import { useDispatch } from "react-redux"
import { getSongDetailAction } from '@/pages/player/store'

/**
 * 调用该函数:传递播放列表和message组件,返回一个函数供于合成事件调用
 * @param {Event} e event事件
 * @param {Number} songId 当前歌曲的id
 */
export function usePlayMusic(){
  const dispatch = useDispatch()
  return (e,songId)=>{
    //如果不跳转，那么组织超链接的默认行为
    e.preventDefault()
    //获取音乐的详情信息
    dispatch(getSongDetailAction(songId))
    //播放音乐
    document.getElementById('audio').autoplay=true;
  }
}