import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {singerMenu} from '@/common/local-data'
import {SingerNavBarWrapper} from './style'
export default memo(function SingerNavBar(props) {
  const id = props.id
  return (
    <SingerNavBarWrapper className='tab-img'>
      {
        singerMenu.map((item)=>{
          return (
            <li key={item.title} className='item'>
              <NavLink to={item.link+'?id='+id} className='tab-img'>
                <em>{item.title}</em>
              </NavLink>
            </li>
          )
        })
      }
    </SingerNavBarWrapper>
  )
})
