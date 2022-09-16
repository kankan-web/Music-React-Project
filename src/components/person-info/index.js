import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {PersonInfoWrapper} from './style'
import {getSizeImage}from'@/utils/format-utils'
export default memo(function PersonInfo() {
  const {info} = useSelector(state=>({
    info: state.getIn(['loginState', 'profile']),
  }),shallowEqual)
  const name = info&&info.nickname;
  const img = info&&info.avatarUrl;
  return (
    <PersonInfoWrapper>
        <div className='img'><img src={getSizeImage(img,80)}/></div>
        <div className='name text-nowrap'>{name}</div>
    </PersonInfoWrapper>
  )
})
