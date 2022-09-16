import request from './request'
//检测二维码的状态
export function checkStateCode(key){
  return request({
    url:`/login/qr/check`,
    params:{
      key,
      timerstamp:Date.now(),
    }
  })
}
//二维码的登录状态设置
export function setStateCode(cookie=''){
  return request({
    url:`/login/status`,
    method: 'post',
    params:{
      timerstamp:Date.now(),
    },
    data: {
      cookie,
    },
  })
}

//二维码key生成接口
export function createCodeKey(){
  return request({
    url:`/login/qr/key`,
    params:{
      timerstamp:Date.now()
    }
  })
}
//根据二维码的key来获取二维码
export function getCode(key){
  return request({
    url:`/login/qr/create`,
    params:{
      key,
      qrimg:true,
      timerstamp:Date.now()
    }
  })
}