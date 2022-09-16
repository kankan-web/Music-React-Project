import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {ArtistCoverWrapper} from './style'
export default memo(function ArtistCover(props) {
  const {info} = props
  return (
    <ArtistCoverWrapper className=''>
      <div className='artist-cover-img sprite_covor'>
        <img src={info.picUrl}/>
        <NavLink to={{
          pathname:'/singer/hotworks',
          search:'id='+info.id
        }}
                 title={info.name+'的音乐'} 
                 className="sprite_covor msk"></NavLink>
      </div>
      <p>
        <NavLink to={{pathname:'/singer/hotworks',search:'id='+info.id}}>
          {info.name}
        </NavLink>
      </p>
    </ArtistCoverWrapper>
  )
})
