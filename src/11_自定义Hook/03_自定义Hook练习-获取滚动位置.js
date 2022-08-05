import React, { useEffect, useState } from 'react'
import useScrollPostion from '../hooks/scroll-position-hook'

export default function CustomScrollPostitionHook() {
  const position = useScrollPostion()
  return (
    <div style={{padding:'1000px 0'}}>
      <h2 style={{position:'fixed',left:0,top:0}}>CustomScrollPostitionHook:{scrollPosition}</h2>
    </div>
  )
}
