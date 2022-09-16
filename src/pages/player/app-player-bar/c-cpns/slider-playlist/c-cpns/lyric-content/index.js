import React, { memo, useEffect,useRef} from 'react'
import {useSelector,shallowEqual} from 'react-redux'
import {LyricContentWrapper} from './style'
import {scrollTo} from '@/utils/ui-helper.js'
export default memo(function LyricContent() {
   // redux hook
   const { lyricList, currentLyricIndex } = useSelector(
    state => ({
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
    }),
    shallowEqual
  )
  //其他hook
  const panelRef = useRef()
  //设置滚动条跟随歌词滚动
  useEffect(()=>{
    if(currentLyricIndex>0&&currentLyricIndex<3) return;
    scrollTo(panelRef.current,(currentLyricIndex-3)*32,300)
  })
  return (
    <LyricContentWrapper ref={panelRef}>
      <div className='lyric-content'>
        {
          lyricList&&lyricList.map((item,index)=>{
            return (
              <div key={item.time}
                   className={
                    'lyric-item ' + (currentLyricIndex === index ? 'active' : '')
                   }
              >
                {item.content}
              </div>
            )
          })
        }
      </div>
    </LyricContentWrapper>
  )
})
