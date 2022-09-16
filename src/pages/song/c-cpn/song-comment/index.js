import React, { memo, useEffect,useState,createElement,useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Comment, Tooltip, Avatar, message } from 'antd'
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { getSongComment } from '@/services/song'

import { 
        getShowCurrentSongHotComment,
        changeShowCurrentSongCommentTotal 
} from '../../store/actionCreators'
import { 
         SongCommentWrapper,
         WonderfulWrapper,
         SoNewWrapper
} from './style'
import ThemeHeader from '@/components/theme-header'
import ThemeComment from '@/components/theme-comment'
import HYPagination from '@/components/pagination/index'

export default memo(function SongComment() {
  // props/state
  const [songComment, setSongComment] = useState([])//歌曲评论
  const [action,setAction] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)//当前页码
  const [total, setTotal] = useState(0)
  //redux handle
  const {currentSongId,hotComments} = useSelector((state)=>({
    currentSongId:state.getIn(['song','showCurrentSongId']),
    hotComments:state.getIn(['song','showCurrentSongHotComment'])
  }),shallowEqual)
  const dispatch = useDispatch()

  //other hooks
  useEffect(()=>{
    dispatch(getShowCurrentSongHotComment(currentSongId))
    getSongComment(currentSongId).then((res)=>{
      setSongComment(res.comments)
      setTotal(res.total)
      dispatch(changeShowCurrentSongCommentTotal(res.total))
    })
  },[dispatch, currentSongId])
  
  /*--------评论功能--------------- */
  // 评论歌曲校验(获取焦点)
  const commentSongcheckout = () => {
    // 没登录
    console.log('获取焦点')
    // if (!isLogin) dispatch(changeIsVisible(true))
  }

  // 评论成功
  const commentCallbackOk = (value) => {
    console.log('评论成功')
    // sendSongComment(currentSongId, value, cookie).then((res) => {
    //   if(res.code === 200) message.success('评论成功').then(() => {
    //     getSongComment(currentSongId).then((res) => {
    //       setSongComment(res.comments)
    //       setTotal(res.total)
    //     })
    //   })
    // })
  }
  /**-----------评论显示部分------------- */
  //时间设置
  function formatDate(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000) // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ')
  }

   // 分页
  const changePage = useCallback(
    (currentPage) => {
      setCurrentPage(currentPage)
      // offset=(当前页数-1)*limit
      const targePageCount = (currentPage - 1) * 20
      getSongComment(currentSongId, 20, targePageCount).then((res) => {
        setSongComment(res.comments)
        setTotal(res.total)
      })
    },
    [currentSongId]
  )
  //评论结构
  const actionFunction=function (count){
    const actions =[
      <Tooltip key="comment-basic-like" title="Like">
        <span>
          {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">({count})</span>
        </span>
      </Tooltip>,
      <span key="comment-basic-reply-to">| 回复</span>,
    ];
    return actions
  }

  return (
    <SongCommentWrapper>
      <ThemeHeader title='评论'/>
      <ThemeComment 
        onFocus={()=>commentSongcheckout()}
        callbackOk={(value)=>commentCallbackOk(value)}
      />
      <WonderfulWrapper>
        <div className='header-comment'>精彩评论</div>
        {
          hotComments&&hotComments.map((item,index)=>{
            return (
              <Comment
                actions={actionFunction(item.likedCount)}
                key={item.commentId}
                author={item.user.nickname}
                avatar={<Avatar src={item.user.avatarUrl} alt="Han Solo" />}
                content={<p>{item.content}</p>}
                datetime={
                  <Tooltip title={formatDate(item.time)}>
                    {formatDate(item.time).slice(
                      0,
                      formatDate(item.time).indexOf(' ')
                    )}
                  </Tooltip>
                }
              />
            )
          })
        }
      </WonderfulWrapper>
      <SoNewWrapper>
      <div className="header-comment">最新评论({total})</div>
        {
          songComment&&songComment.map((item,index)=>{
            return (
              <Comment
                actions={actionFunction(item.likedCount)}
                key={item.commentId}
                author={item.user.nickname}
                avatar={<Avatar src={item.user.avatarUrl} alt="Han Solo" />}
                content={<p>{item.content}</p>}
                datetime={
                  <Tooltip title={formatDate(item.time)}>
                    {formatDate(item.time).slice(
                      0,
                      formatDate(item.time).indexOf(' ')
                    )}
                  </Tooltip>
                }
              />
            )
          })
        }
      </SoNewWrapper>
      <HYPagination
        currentPage={currentPage}
        pageSize={20}
        total={total}
        onPageChange={(currentPage) => changePage(currentPage)}
      />
    </SongCommentWrapper>
  )
})
