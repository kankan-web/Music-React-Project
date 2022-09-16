import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { SingerDescWrapper } from './style'
export default memo(function SingerDesc() {
  const {singerInfo} = useSelector(state=>({
    singerInfo:state.getIn(['singer','singerDesc'])
  }),shallowEqual)
  const singerDesc = singerInfo&&singerInfo.briefDesc;
  const singerIntroduction = singerInfo&&singerInfo.introduction;
  return (
    <SingerDescWrapper>
      <h2 className='singer-desc'>
        <i>&nbsp;</i>
        个人简介
      </h2>
      <p className='desc-p'>{singerDesc}</p>
      {
        singerIntroduction&&singerIntroduction.map((item,index)=>{
          return (
            <div className='singer-introduction' key={item.ti}>
              <h2 className='introduction-item'>{item.ti}</h2>
              <p>{item.txt}</p>
            </div>
          )
        })
      }
    </SingerDescWrapper>
  )
})
