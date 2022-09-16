import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const ImgCoverWrapper = styled.div`
  float: left;
  padding: 0 0 13px 9px;
  img{
    width: 40px;
    height: 40px;
  }
  .img-wrapper{
    display: block;
  }
  .name{
    display: block;
    width: 50px;
  }
`
export default memo(function ImgCover(props) {
  const {info,isShowTitle=false,src=''} = props
  const img=(info&&info.avatarUrl) || (info&&info.picUrl)
  const nickname = (info&&info.nickname) ||(info&&info.name)
  return (
    <ImgCoverWrapper>
      <NavLink to={src} className='img-wrapper'>
        <img src={img} title={nickname}/>
      </NavLink>
      {
        isShowTitle&&(
          <NavLink to={src} className='name text-nowrap'>{nickname}</NavLink>
        )
      }
    </ImgCoverWrapper>
  )
})
