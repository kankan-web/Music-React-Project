import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/user-localStorage'

export default function CustomDataStoreHook() {
 const [name,setName] = useLocalStorage('name')
  return (
    <div>
      <h2>CustomDataStoreHook:{name}</h2>
      <button onClick={e=>setName('codewhy')}>设置name</button>
    </div>
  )
}
