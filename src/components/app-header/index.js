import React, { memo } from 'react'
import {headerLinks} from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import {
  HeaderWapper,
  HeaderLeft,
  HeaderRight
} from './style'
import ModelLogin from '../model-login'
import { changeIsVisible } from '@/components/model-login/store'
import {getSizeImage}from'@/utils/format-utils'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
const MYAppFooter = memo(() => {
  const dispatch = useDispatch()
  const { isLogin,info } = useSelector((state) => ({
    isLogin: state.getIn(['loginState', 'isLogin']),
    info: state.getIn(['loginState', 'profile']),
  }),shallowEqual)
  const img = info&&info.avatarUrl
  //页面代码
  const showSelectItem = (item,index)=>{
    if(index<3){
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    }else{
      return <a href={item.link}>{item.title}</a>
    }
  }

  const handleLogin = ()=>{
    if(!isLogin) dispatch(changeIsVisible(true))
  }
  //返回jsx
  return (
    <HeaderWapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='#/' className='logo sprite_01'>网易云音乐</a>
          <div className='select-list'>
            {
              headerLinks.map((item,index)=>{
                return (
                  <div key={item.title} className='select-item'>
                    {showSelectItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
            <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined/>}/>
            <div className='center'>创作者中心</div>
            {
              !isLogin?<div className='login' onClick={()=>handleLogin()}>登录</div>:
              (<div className='person-img'><img src={getSizeImage(img,30)}/></div>)
            }
        </HeaderRight>
      </div>
      <div className='divider'></div>
      <ModelLogin/>
    </HeaderWapper>
  )
})

export default MYAppFooter