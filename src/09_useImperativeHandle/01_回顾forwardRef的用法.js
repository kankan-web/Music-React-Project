import React, { useRef,forwardRef } from 'react'
const HYInput = forwardRef((props,ref)=>{
  return <input type='text'/>
})
export default function ForwardRefDemo() {
  const inputRef = useRef();
  return (
    <div>
      <HYInput ref={inputRef}/>
      <button>聚焦</button>
    </div>
  )
}
