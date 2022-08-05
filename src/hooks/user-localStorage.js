import {useState,useEffect} from 'react'
function useLocalStorage(key){
  const [data,setdata] = useState(()=>{
    const data = window.localStorage.getItem(key);
    return data;
  })
  useEffect(()=>{
    window.localStorage.setItem(key,JSON.stringify(data))
  },[data])
  return [data,setdata]
}
export default useLocalStorage;