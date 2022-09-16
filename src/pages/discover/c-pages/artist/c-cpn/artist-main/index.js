import React, { memo, useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {ArtisMainOneWrapper} from './style';
import {getArtistCurrentInfoAction} from '../../store/actionCreate'
import ArtistCover from '../artist-cover'
export default memo(function ArtistMainOne() {
  //redux hook
  const {currentIndex,artistCurrentInfo} = useSelector((state)=>({
    currentIndex:state.getIn(['artist','artistCurrentIndex']),
    artistCurrentInfo:state.getIn(['artist','artistCurrentInfo']),
  }),shallowEqual)
  const dispatch = useDispatch()
  //other hook
  useEffect(()=>{
    dispatch(getArtistCurrentInfoAction(currentIndex))
  },[dispatch,currentIndex])
  return (
    <ArtisMainOneWrapper>
      <div className='artist-main'>
        {
          artistCurrentInfo&&artistCurrentInfo.slice(0,10).map((item,index)=>{
            return (
              <ArtistCover key={item.id}
                           info={item}
              />
            )
          })
        }
      </div>
      <ul className='artist-item'>
        {
          artistCurrentInfo&&artistCurrentInfo.slice(10,30).map((item,index)=>{
            return (
              <li key={index}>
                <NavLink to={'/singer/hotworks?id='+item.id}>{item.name}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </ArtisMainOneWrapper>
  )
})
