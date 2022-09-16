import React, { memo, useEffect } from 'react'
import {useDispatch,shallowEqual} from 'react-redux'
import qs from 'query-string'
import {
  changeAlbumIdAction,
  getOtherAlbumAction,
  getAlbumDetailAction
} from './store/actionCreate'
import { MYAlbumWrapper,
         AlbumLeftWrapper 
} from './style'
import AppNavBar from '@/components/nav-bar/index'
import AlbumRight from './c-cpn/album-right'
import AlbumDesc from './c-cpn/album-desc'
import AlbumInfo from './c-cpn/album-info'
import AlbumSong from './c-cpn/album-song'
import AlbumComment from './c-cpn/album-comment'
export default memo(function MYAlbum(props) {
  const {id} = qs.parse(props.location.search)//获取歌手的id
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeAlbumIdAction(id))
    // dispatch(getOtherAlbumAction(id))
    dispatch(getAlbumDetailAction(id))
  },[dispatch,id])
  return (
    <MYAlbumWrapper>
       <AppNavBar/>
      <div className='wrap-v2 album-main'>
        <AlbumLeftWrapper>
          <AlbumInfo/>
          <AlbumDesc/>
          <AlbumSong />
          <AlbumComment/>
        </AlbumLeftWrapper>
        <AlbumRight/>
      </div>
      
    </MYAlbumWrapper>
  )
})
