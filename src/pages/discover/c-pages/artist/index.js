import React, { memo,useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import qs from 'query-string'

import { artistCategory } from '@/common/local-data'
import {ArtistWrapper,ArtistLeft,ArtistRight} from './style'
import {getArtistInfoAction} from './store/actionCreate'
import ArtistItem from './c-cpn/artist-item'
import ArtistHeader from './c-cpn/artist-header'
import ArtistMain from './c-cpn/artist-main'
export default memo(function Artist(props) {
  //redux hook
  const dispatch = useDispatch()


  //other hook
  useEffect(()=>{
    //获取分类的全部数据
    dispatch(getArtistInfoAction(artistCategory))
  },[dispatch,artistCategory])
   // 排行榜头部信息
   useEffect(() => {
    // 派发榜单标题信息Action
    let { id } = qs.parse(props.location.search)
  }, [ dispatch, props])
  
  return (
    <ArtistWrapper className='wrap-bg3'>
      <div className='content wrap-v2'>
        <ArtistLeft>
          <ArtistItem history={props.history}></ArtistItem>
        </ArtistLeft>
        <ArtistRight>
          <ArtistHeader></ArtistHeader>
          <ArtistMain></ArtistMain>
        </ArtistRight>
      </div>
    </ArtistWrapper>
  )
})
