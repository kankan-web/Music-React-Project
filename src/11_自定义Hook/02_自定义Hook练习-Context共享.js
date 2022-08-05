import React, { useContext } from 'react'
import { TokenContext, UserContext } from '../App'
import useUserContext from '../hooks/user-hook'

export default function CustomContextShareHook() {
  const [user,token] = useUserContext()
  console.log(user,token)
  return (
    <div>02_自定义Hook练习-Context共享</div>
  )
}
