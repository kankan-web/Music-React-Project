import axios from '@/services/request'
async function checkStatus(key) {
  const res = await axios({
    url: `/login/qr/check?key=${key}&timerstamp=${Date.now()}`,
  })
  return res
}
//获取登录状态
async function getLoginStatus(cookie = '') {
  const res = await axios({
    url: `/login/status?timerstamp=${Date.now()}`,
    method: 'post',
    data: {
      cookie,
    },
  })
  return res.data.profile
}
export {
  getLoginStatus,
  checkStatus
}