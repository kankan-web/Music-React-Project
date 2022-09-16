import React, { memo,useCallback,useEffect,useRef,useState } from 'react'
import {useDispatch,useSelector,shallowEqual}from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'
import { Carousel } from 'antd';

export default memo(function MYTopBanner() {
  //state
  const [currentIndex,setCurrentIndex] = useState(0)

  //组件和redux关联：获取数据和进行更新
  const {topBanners} = useSelector(state=>({
    // topBanners:state.get('recommend').get("topBanners")
    topBanners:state.getIn(['recommend','topBanners'])
  }),shallowEqual)
  const dispatch = useDispatch();
  //发送网络请求
  useEffect(()=>{
    dispatch(getTopBannerAction())
  },[dispatch])

  //其他Hook
  const bannerRef = useRef();
  const bannerChange = useCallback((from,to)=>{
    setCurrentIndex(to)
  },[])

  //其他业务逻辑
  const bgImage = 
    topBanners&&
    topBanners[currentIndex]&&
    (topBanners[currentIndex].imageUrl+'?imageView&blur=40x20')

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
        <Carousel effect="fade" 
                  autoplay 
                  ref={bannerRef} 
                  beforeChange={bannerChange}>
          {
            topBanners.map((item,index)=>{
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img className='image' src={item.imageUrl} alt={item.typeTitle}/>
                </div>
              )
            })
          }
        </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e=>bannerRef.current.prev()}></button>
          <button className='btn right' onClick={e=>bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
