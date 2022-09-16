import React, { memo, useEffect } from 'react'

import { renderRoutes } from 'react-router-config'
import request from '@/services/request'
import AppNavBar from '@/components/nav-bar/index'
import {DiscoverWrapper,TopMenu} from './style'
import { useDispatch } from 'react-redux'
import { changeIsVisible } from '@/components/model-login/store'
const MYDiscover = memo((props) => {//发现页面
  const dispatch = useDispatch()
  useEffect(()=>{
    request({
      url:"/banner"
    }).then(res=>{
    })
    const cookie = localStorage.getItem('cookie')
    if(!cookie){
      dispatch(changeIsVisible(true))
    }
  },[])
  const {route} = props;
  return (
    <DiscoverWrapper>
        <AppNavBar/>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

export default MYDiscover;