import React, { memo } from 'react'
import {useSelector,shallowEqual} from 'react-redux'
import { artistCategory } from '@/common/local-data'
import {ArtisHeaderWrapper} from './style'
export default memo(function ArtisHeader() {
  //redux hook
  const {currentIndex} = useSelector((state)=>({
    currentIndex:state.getIn(['artist','artistCurrentIndex'])
  }),shallowEqual)
  return (
    <ArtisHeaderWrapper>
      <h2>{artistCategory&&artistCategory[currentIndex].title}</h2>
    </ArtisHeaderWrapper>
  )
})
