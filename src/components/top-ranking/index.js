import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {TopRankingWrapper} from './style'
import {getSizeImage} from '@/utils/format-utils'
import { getSongDetailAction } from '@/pages/player/store';
import {usePlayMusic} from '@/hooks/play-music'
export default memo(function MYTopRanking(props) {
  //props and state
  const {info,src} = props;
  const { tracks = [] } = info;

  //redux hooks
  const dispatch = useDispatch();

  //other handle
  //播放音乐
    // funciton
  const playMusic =usePlayMusic()//播放音乐

  return (
    <TopRankingWrapper>
     <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className='list'>
        {
          tracks.slice(0,10).map((item,index)=>{
            return (
              <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play"
                          onClick={e=>playMusic(e,item.id)}></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
      <div className='footer'>
      <NavLink to={src}>查看全部 &gt;</NavLink>
      </div>
    </TopRankingWrapper>
  )
})
