import React, { memo } from 'react'
import { discoverMenu } from '@/common/local-data'
import { CategoryList, NavBarWrapper,TopMenu } from './style'
import { NavLink } from 'react-router-dom'

function AppNavBar() {
  // other handle
  return (
    <NavBarWrapper>
      <TopMenu className="wrap-v1">
        {
         discoverMenu.map((item) => {
          return (
            <div key={item.title} className="item">
              <NavLink to={item.link}>
                {item.title}
              </NavLink>
            </div>
          )
        })}
      </TopMenu>
    </NavBarWrapper>
  )
}

export default memo(AppNavBar)
