import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper,HeaderLeftWrapper,HeaderRightWrapper } from './style'

const MYThemeHeaderRCM = memo(function (props) {
  const {title,keywords,showIcon,right,src} = props
  return (
    <HeaderWrapper className='sprite_02'>
      <HeaderLeftWrapper>
          <h3 className='title'>{title}</h3>
          <div className='keyword'>
            {
              keywords.map((item)=>{
                return (
                  <div className='item' key={item}>
                    <a href='todo'>{item}</a>
                    <span className='divider'>|</span>
                  </div>
                )
              })
            }
          </div>
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <NavLink to={src}>{right}</NavLink>
        {showIcon && <i className='icon sprite_02'></i>}
      </HeaderRightWrapper>
    </HeaderWrapper>
  )
})
MYThemeHeaderRCM.propTypes={
  title:PropTypes.string.isRequired,
  keywords:PropTypes.array,
  showIcon:PropTypes.bool,
  right:PropTypes.any,
  src:PropTypes.string
}
MYThemeHeaderRCM.defaultProps={
  keywords:[],
  showIcon:true,
  right: '更多',
  src:''
}
export default MYThemeHeaderRCM;