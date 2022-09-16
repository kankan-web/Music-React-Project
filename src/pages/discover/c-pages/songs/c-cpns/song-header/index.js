import React, { memo, useState } from 'react'
import {shallowEqual,useSelector} from 'react-redux'

import { SongHeaderWrapper,SongHeaderLeft,SongHeaderRight } from './style'
import MYSongCategory from '../song-category'
export default memo(function MYSongHeader(props) {
  // hooks
  const [showCategory, setShowCategory] = useState(false);

  //redux hooks
  const {currentCategory} = useSelector(state=>({
    currentCategory:state.getIn(['songList','currentCategory'])
  }),shallowEqual)
  return (
    <SongHeaderWrapper>
      <SongHeaderLeft>
        <span className='title'>{currentCategory}</span>
        <button className='select' onClick={e=>setShowCategory(!showCategory)}>
          <span>选择分类</span>
          <i className='sprite_icon2'></i>
        </button>
        {showCategory ? <MYSongCategory /> : null}
      </SongHeaderLeft>
      <SongHeaderRight>
        <button className='hot'>热门</button>
      </SongHeaderRight>
    </SongHeaderWrapper>
  )
})
