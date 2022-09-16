import React, { memo,useEffect,useState,useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Draggable from 'react-draggable'
import axios from '@/services/request'

import {getLoginStatus,checkStatus} from './login'
import { Button, Modal } from 'antd';
import {ModelLoginWrapper} from './style'
import {changeIsVisible,changeUserLoginState,changeUserProfile} from './store/actionCreator'
export default memo(function ModalLogin() {
  const [disabled, setDisabled] = useState(true)
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 })
  const draggleRef = useRef()
  // redux
  const dispatch = useDispatch()
  const { isVisible } = useSelector(
    (state) => ({
      isVisible: state.getIn(['loginState', 'isVisible']),
    }),shallowEqual)
  //hook
  useEffect(()=>{
    if(isVisible) {
      login()
    }
  },[isVisible])
  

  // 取消
  const handleCancel = (e) => {
    // 关闭模态框
    dispatch(changeIsVisible(false))
  }
  // 拖拽
  const onStart = (event, uiData) => {
    console.log('---->拖拽')
    const { clientWidth, clientHeight } = window?.document?.documentElement
    const targetRect = draggleRef?.current?.getBoundingClientRect()
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    })
  }
  //登录
  async function login() {
    let timer
    let timestamp = Date.now()
    const cookie = localStorage.getItem('cookie')
    if(cookie) getLoginStatus(cookie)
    const res = await axios({
      url: `/login/qr/key?timerstamp=${Date.now()}`,
    })
    const key = res.data.unikey
    console.log('key',key)
    const res2 = await axios({
      url: `/login/qr/create?key=${key}&qrimg=true&timerstamp=${Date.now()}`,
    })
    document.querySelector('#qrImg').src = res2.data.qrimg
  
    timer = setInterval(async () => {
      const statusRes = await checkStatus(key)
      console.log('statusRws',statusRes)
      if (statusRes.code === 800) {
        alert('二维码已过期,请重新获取')
        clearInterval(timer)
      }
      if (statusRes.code === 803) {
        // 这一步会返回cookie
        clearInterval(timer)
        alert('授权登录成功')
        dispatch(changeIsVisible(false))//设置是否可见登录框
        dispatch(changeUserLoginState(true))//设置登录状态
        const data = await getLoginStatus(statusRes.cookie)
        dispatch(changeUserProfile(data))
        localStorage.setItem('cookie', statusRes.cookie)
      }
    }, 3000)
  }
  return (
    <Draggable>
      <Modal 
             centered
             title="登录"
             visible={isVisible}
             onCancel={handleCancel}
             footer={null}
             modalRender={(model)=>(
              <Draggable
                  disabled={disabled}
                  bounds={bounds}
                  onStart={(event,uiData)=>onStart(event,uiData)}
                >
                  <div ref={draggleRef}>{model}</div>
              </Draggable>
             )}
      >
      <ModelLoginWrapper>
        <div className='model-login-img login-img'></div>
        <div className='code'>
            <h3>扫码登录</h3>
            <div className='code-main'>
              <img id='qrImg'/>
              <div id='info' className="info"></div>
            </div>
            <p>使用&nbsp;<a href='#'>网易云音乐App</a>&nbsp;扫描登录</p>
        </div>
      </ModelLoginWrapper>
      </Modal>
    </Draggable>
  )
})