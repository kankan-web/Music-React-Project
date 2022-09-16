import React, { memo, useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import { artistCategory } from '@/common/local-data'
import { ArtistItemWrapper } from './style'
import { Fragment } from 'react'
import {changeCurrentIndexAction} from '../../store/actionCreate'
export default memo(function SrtistItem(props) {
  //props state
  
  //redux hook
  const dispatch = useDispatch()
  const {currentIndex} = useSelector((state)=>({
    currentIndex:state.getIn(['artist','artistCurrentIndex'])
    }),shallowEqual)
  //other handle
  const titleCreate = function(index){
    switch(index){
      case 0:
        return '推荐';
      case 2:
        return '华语';
      case 5:
        return '欧美';
      case 8:
        return '日本';
      case 11:
        return '韩国';
      case 14:
        return '其他';
      default:
        return ''
    }
  }
  const titleStyle = function(index){
    switch(index){
      case 2: return ' category-title-line'
      case 5: return ' category-title-line'
      case 8: return ' category-title-line'
      case 11: return ' category-title-line'
      case 14: return ' category-title-line'
      default: return ''
    }
  }
  const itemStyle = function(index){
    switch(index){
      case 1: return ' category-item-last'
      case 4: return ' category-item-last'
      case 7: return ' category-item-last'
      case 10: return ' category-item-last'
      case 13: return ' category-item-last'
      default: return ''
    }
  }
  //function
  const clickItem=(e,index,item)=>{
    e.preventDefault();
    let currentId = item.id || ''
    let src = item.url||''
    if(currentId){
      currentId='id='+currentId
    }
    //dispatch
    dispatch(changeCurrentIndexAction(index))
    //修改URL
    props.history.push(`/discover/artist${src}${currentId}`)
  }
  return (
    <ArtistItemWrapper>
      {
        artistCategory&&artistCategory.map((item,index)=>{
          return (
            <Fragment key={index}>
              <h2 className={'category-title'+ titleStyle(index)}>
                {titleCreate(index)}
              </h2>
                <div className={'category-item'+itemStyle(index)+(index===currentIndex?' active':'')}
                         onClick={(e)=>clickItem(e,index,item)}       
                >
                  <a className='category-name'>{item.name}</a>
                </div>
            </Fragment>
          )
        })
      }
    </ArtistItemWrapper>
  )
})
