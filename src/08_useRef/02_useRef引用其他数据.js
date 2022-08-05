import React,{useEffect, useRef, useState} from 'react'

export default function RefHookDemo02() {
  const [count,setCount] = useState(0)
  const numRef = useRef(count)
  //利用useEffect和useRef实现或是上回的值和当前的值
  useEffect(()=>{//count被渲染后执行
    numRef.current = count;
  },[count])
  return (
    <div>
      {/* <h2>RefHookDemo02:{numRef.current}</h2> */}
      <h2>count上一次的值:{numRef.current}</h2>
      <h2>count这次的值:{count}</h2>
      <button onClick={e=>setCount(count+10)}>+10</button>
    </div>
  )
}
