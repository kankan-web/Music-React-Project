import React, { useEffect } from 'react'
const Home = (props)=>{
  uselogginLife('Home')
  return <h2>Home</h2>
}
const Profile = (props)=>{
  uselogginLife('Profile')
  return <h2>Profile</h2>
}
export default function CustomLifeHookDemo01() {
  uselogginLife('CustomLifeHookDemo01')
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home />
      <Profile/>
    </div>
  )
}
// useEffect在普通函数中不能使用
// function logginLife(name){
//   useEffect(()=>{
//     console.log(`${name}组件被创建出来了`)
//     return ()=>{
//       console.log(`${name}Profile组件被销毁了`);
//     }
//   },[])
// }
//是一个自定义Hook
function uselogginLife(name){
  useEffect(()=>{
    console.log(`${name}组件被创建出来了`)
    return ()=>{
      console.log(`${name}Profile组件被销毁了`);
    }
  },[])
}