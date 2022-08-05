import React, { forwardRef, useImperativeHandle } from 'react'
const HYInput = forwardRef((props,ref)=>{
  useImperativeHandle(ref,()=>({
    focus:()=>{
      inputRef.current.focus();
      console.log('useImperativeHandle中回调函数返回的对象focus')
    }
  }),[inputRef.current])
  return <input ref={ref} type='text' />
})
export default function UseImperativeHandleHookDemo() {
  const inputRef = useRef();
  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={e=>inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
