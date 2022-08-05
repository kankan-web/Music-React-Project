function useScrollPostion(){
  const [scrollPosition,setScrollPosition] = useState(0)
  useEffect(()=>{
    const handleScroll = ()=>{
      setScrollPosition(window.screenY)
    }
    document.addEventListener('scroll',handleScroll)
    return ()=>{
      document.removeEventListener('scroll',handleScroll)
    }
  },[])
  return scrollPosition
}
export default useScrollPostion;