import React, { memo, useEffect } from 'react'
import { useDispatch,shallowEqual,useSelector } from 'react-redux'

import { getCategory,
         getSongList,
         changeCurrentCategoryAction 
} from '../../store/actionCreate'

import {SongCategoryWrapper} from './style'
export default memo(function MYSongCategory() {
  //reudux
  const dispatch = useDispatch()
  const {category} = useSelector((state)=>({
    category:state.getIn(['songList','category'])
  }),shallowEqual)
  //other
  function selectCategory(name) {
    console.log('name',name)
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getSongList(0));
  }

  //hooks
  useEffect(()=>{
    dispatch(getCategory())
  },[dispatch])

  return (
    <SongCategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <a className="link">全部风格</a>
      </div>
      <div className='category'>
        {
          category&&category.map((item, index) => {
            return (
              <dl key={item.name} className={"item" + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                          <a className="link" onClick={e => selectCategory(sItem.name)}>{sItem.name}</a>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </SongCategoryWrapper>
  )
})
