import React, { memo, useEffect, useRef, useState } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
//
import MYThemeHeaderRCM from '@/components/theme-header-rcm'
import { getNewAlbumAction } from '../../store/actionCreators'
import { AlbumWrapper } from './style'
//
import {Carousel} from 'antd'
import MYAlbumCover from '@/components/ablum-cover'
//新碟上架部分
export default memo(function MYNewAlbum() {
  //redux hooks
  const {newAlbums} = useSelector(state=>({
    newAlbums:state.getIn(['recommend','newAlbums'])
  }),shallowEqual);

  const dispatch = useDispatch();
  //其他hook
  const pageRef = useRef()
  useEffect(()=>{
    dispatch(getNewAlbumAction(10))
  },[dispatch])
  return (
    <AlbumWrapper>
      <MYThemeHeaderRCM title="新碟上架" />
      <div className='content'>
        <button className='arrow arrow-left sprite_02' 
          onClick={e=>pageRef.current.prev()}>
        </button>
        <div className='album'>
            <Carousel dots={false} ref={pageRef}>
              {
                [0,1].map(item=>{
                  return (
                    <div key={item} className='page'>{
                      newAlbums.slice(item*5,(item+1)*5).map(iten=>{
                        return <MYAlbumCover key={iten.id}
                                             info={iten}
                                             size={100}
                                             width={118}
                                             bgp="-570px">
                                {iten.name}
                                </MYAlbumCover>
                      })
                    }</div>
                  )
                })
              }
            </Carousel>
          </div>
        <button className='arrow arrow-right sprite_02'
            onClick={e=>pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
})
