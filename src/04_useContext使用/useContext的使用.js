import React, { createContext, useState } from 'react'
import { UseContext,ThemeContext } from '../App';

export default function ContextHookDemo(props) {
  const user = createContext(UseContext);
  const theme = createContext(ThemeContext);
  console.log(user,theme,props.value)
  return (
    <div>useContext的使用</div>
  )
}
