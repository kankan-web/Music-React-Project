import React, { memo } from 'react'
import {useSelector} from 'react-redux'
import {AlbumDescWrapper} from './style';
import { Collapse } from 'antd'
export default memo(function AlbumDesc() {
  const { Panel } = Collapse
  const {albumDesc} = useSelector((state)=>({
    albumDesc:state.getIn(['album','albumDetail','album','description'])
  }))
  const desc = albumDesc&&albumDesc.split(/\n/)
  return (
    <AlbumDescWrapper>
      <Collapse>
        <Panel header={'专辑介绍'}>
        {desc&&desc.map((item,index)=>{
          return (
            <div key={index} className='desc'>
              {item}
            </div>
          )
        })}
        </Panel>
      </Collapse>
    </AlbumDescWrapper>
  )
})
