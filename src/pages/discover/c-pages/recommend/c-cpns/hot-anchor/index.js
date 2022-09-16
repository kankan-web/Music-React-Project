import React, { memo } from 'react'
import { hotRadios } from '@/common/local-data.js'

import { HotAnchorWrapper } from './style'

import { HotCoverInfo,ArtistHeaderLine } from '@/components'
export default memo(function MYHotAnchor() {
  return (
    <HotAnchorWrapper>
      <ArtistHeaderLine titleSlot='热门主播'/>
      <div className='artist-container'>
        {
          hotRadios.map(item=>{
            return <HotCoverInfo key={item.picUrl} info={item}/>
          })
        }
      </div>
    </HotAnchorWrapper>
  )
})
