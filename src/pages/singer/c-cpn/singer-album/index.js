import React, { memo,useState,useCallback} from 'react'
import { useSelector } from 'react-redux'
import {getSingerAlbum} from '@/services/singer'
import {SingerAlbumWrapper} from './style'
import SingerAlbumItem from '@/components/singer-album-item'
import HYPagination from '@/components/pagination/index'
export default memo(function SingerAlbum() {
  const [currentPage, setCurrentPage] = useState(1)//当前页码
  const [songComment, setSongComment] = useState([])//歌曲评论
  const [total, setTotal] = useState(0)

  const {singerAlbum,currentSongId} = useSelector((state)=>({
    singerAlbum:state.getIn(['singer','singerAlbum']),
    currentSongId:state.getIn(['singer','singerId'])
  }))
   // 分页
   const changePage = useCallback(
    (currentPage) => {
      setCurrentPage(currentPage)
      // offset=(当前页数-1)*limit
      const targePageCount = (currentPage - 1) * 20
      getSingerAlbum(currentSongId, 20, targePageCount).then((res) => {
        setSongComment(res.comments)
        setTotal(res.total)
      })
    },
    [currentSongId]
  )
  return (
    <SingerAlbumWrapper>
      <ul className='album-main'>
        {singerAlbum&&singerAlbum.map((item,index)=>{
          return (
            <SingerAlbumItem 
                key={index} 
                info={item}
              />
          )
        })}
      </ul>
      <HYPagination
        currentPage={currentPage}
        pageSize={20}
        total={total}
        onPageChange={(currentPage) => changePage(currentPage)}
      />
    </SingerAlbumWrapper>
  )
})
