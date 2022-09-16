import React, { memo, useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import {UserLoginWapper} from './style'
import { changeIsVisible } from '@/components/model-login/store'
import PersonInfo from '@/components/person-info'
export default memo(function MYUserLogin() {
  const dispatch = useDispatch()
  const { isLogin } = useSelector((state) => ({
    isLogin: state.getIn(['loginState', 'isLogin']),
  }),shallowEqual)
  useEffect(()=>{

  },[isLogin])
  
  const handleLogin = ()=>{
    if(!isLogin) dispatch(changeIsVisible(true))
  }
  return (
    <UserLoginWapper>
      {
        !isLogin?
        (
        <div className='profile-info sprite_02'>
          <p className='login-detail'>
          登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
          </p>
          <button className='user-login sprite_02' onClick={()=>handleLogin()}>
            用户登录
          </button>
        </div>
        ):(
          <PersonInfo/>
        )
      }
    </UserLoginWapper>
  )
})
