import React, { memo, useCallback, useEffect, useRef,useState } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom'

import {getSizeImage,formatDate,getPlaySong} from '@/utils/format-utils'
import { changeSequenceAction, 
          getSongDetailAction,
          changeCurrentLyricIndexAction,
          changeCurrentSong
        } from '../store/actionCreators'
import {usePlayMusic} from '@/hooks/play-music'
import {PlaybarWrapper,Control,PlayInfo,Operator} from './style'
import {Slider,message,Tooltip} from 'antd'
import SliderPlaylist from './c-cpns/slider-playlist'
// import {useChangeUrl} from '@/hooks/change-url'

export default memo(function MYAppPlayerBar(props) {
  //props and state
  const [currentTime,setCurrentTime] = useState(0)//用于保存当前播放的时间
  const [progress,setProgress] = useState(0)//滑块进度
  //当手指滑动时,onTimeUpdate是不能设置进度的.当手指滑动停止时,再设置进度
  const [isChanging,setIsChanging] = useState(false);//是否正在滑动
  const [isPlaying,setIsPlaying] = useState(false);//是否正在播放
  const [isShowSlide, setIsShowSlide] = useState(false); // 是否显示播放列表
  const [isShowBar, setIsShowBar] = useState(false); // 是否显示音量播放条
  const audioRef = useRef()


  //redux hook
  const dispatch = useDispatch();
  const {
    currentSong,
    sequence,
    lyricList,
    currentLyricIndex,
    playListCount
  }=useSelector(state=>({
    currentSong:state.getIn(['player','currentSong']),
    sequence:state.getIn(['player','sequence']),
    lyricList:state.getIn(['player','lyricList']),
    currentLyricIndex:state.getIn(['player','currentLyricIndex']),
    playListCount:state.getIn(['player','playListCount']),
  }),shallowEqual)


  //other hook
  useEffect(()=>{
    dispatch(getSongDetailAction(167876))//获取当前播放的音乐
  },[dispatch])

  useEffect(()=>{//只有第一次播放时或音乐修改是需要设置src
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res=>{
      setIsPlaying(true)
    }).catch(err=>{
      setIsPlaying(false)
    })
  },[currentSong])

  //other hadnle
  const picUrl =(currentSong.al&&currentSong.al.picUrl)||'';
  const singerName =(currentSong.ar&&currentSong.ar[0].name)||"未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration,'mm:ss');//歌曲总时间
  const showCurrentTime =formatDate(currentTime,'mm:ss');//显示的当前时间
  // const progress = currentTime/duration * 100;//进度条的值,这个值的改变会影响页面的重绘

  //handle function
  // 音乐播放设置
  const playMusic = useCallback(()=>{
    isPlaying ? audioRef.current.pause():audioRef.current.play();
    setIsPlaying(!isPlaying)
  },[isPlaying])

  //当手指滑动时设置了进度,
  const timeUpdate = (e)=>{//当播放位置发生改变时执行
    if(!isChanging){
      setCurrentTime(e.target.currentTime*1000);
      setProgress(currentTime/duration * 100 )
    }
    //获取当前的歌词
    let i=0;
    for (;i<lyricList.length;i++){
      let lyricItem = lyricList[i];
      if(currentTime <lyricItem.time){
        break;
      }
    }
    if(currentLyricIndex!==i-1){
      dispatch(changeCurrentLyricIndexAction(i-1))
      // 显示歌词设置
      const lyricContent = lyricList[i-1]&&lyricList[i-1].content
      lyricList&&message.open({
        key: 'lyric',
        content: lyricContent,
        duration: 0,
        className: 'lyric-css',
      })
    }
  }
  //当滑片在滑动时执行
  const sliderChange = useCallback((value)=>{
    setIsChanging(true);
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime);
    setProgress(value);
  },[duration])
  //当滑片停止滑动的后执行
  const sliderAfterChange = useCallback((value)=>{
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime * 1000);
    setIsChanging(false);
    if(!isPlaying){//如果没有再播放时,滑动进度条,则继续开始播放
      playMusic();
    }
  },[duration,isPlaying,playMusic])
  /*
  sliderAfterChange-->useCallback-->playMusic
  因为playMusic是一个局部变量,每次组件发生改变时,playMusic就是新的值
  而useCallback是依赖playMusic的,playMusic改变时,useCallback内部代码就执行
  警告:Line 41:9:  The 'playMusic' function makes the dependencies of 
  useCallback Hook (at line 68) change on !every render!. To fix this,
  wrap the definition of 'playMusic' in its own useCallback() Hook 
  react-hooks/exhaustive-deps
  */
 //设置播放状态,循环:0\随机:1\单曲:2
  const changeSequence = ()=>{
    let currentSequence = sequence + 1;
    if(currentSequence>2){
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }
  
  //设置音乐播放,上一首，下一首
  const changeMusic = (tag)=>{
    dispatch(changeCurrentSong(tag))
  }
  //设置音乐结束后该如何进行操作
  const handleMusicEnded = ()=>{
    if(sequence===2){
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }else{
      dispatch(changeCurrentSong(1))
    }
  }
  //控制音量
  function changingVolume(value) {
    audioRef.current.volume = value / 100;
  }
   // 改变播放列表是否显示
  const changePlaylistShow = useCallback(() => {
    setIsShowSlide(!isShowSlide);
  }, [isShowSlide]);

  /*
  与播放暂停部分不同，再次点击同一个Item,则会从头开始播放
  */
  //播放音乐/
  const forcePlayMusic=()=>{
    setIsPlaying(true+Math.random())
  }
  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_player prev'
                  onClick={e=>changeMusic(-1)}></button>
          <button className='sprite_player play' 
                  onClick={e=>playMusic()}></button>
          <button className='sprite_player next'
                  onClick={e=>changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to={{
                      pathname:'/song',
                      search:'?id='+currentSong.id
                    }}
              >
              <img src={getSizeImage(picUrl,35)} alt=''/>
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <NavLink to={{
                      pathname:'/song',
                      search:'?id='+currentSong.id
                      }}
                       className='song-name'
                >
                {currentSong.name}
              </NavLink>
              <a href='#/' className='singer-name'>{singerName}</a>
            </div>
            <div className='progress'>
              <Slider defaultValue={30} 
                      value={progress}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}
                      />
              <div className='time'>
                <span className='now-time'>{showCurrentTime}</span>
                <span className='divider'>/</span>
                <span className='duration'>{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className='left'>
            <Tooltip title='收藏'>
              <button className='sprite_player btn favor' ></button>
            </Tooltip>
            <Tooltip title="分享">
              <button className='sprite_player btn share' ></button>
            </Tooltip>
          </div>
          <div className='right sprite_player'>
            <Tooltip title="调节音量">
            <button className='sprite_player btn volume' 
                    onClick={()=>setIsShowBar(!isShowBar)}></button>
            </Tooltip>
            <Tooltip 
              title={['顺序播放',
                      '随机播放',
                      '单曲循环'].filter((item,index)=>
                        index===sequence?item:undefined
                      )
                      }>
              <button className='sprite_player btn loop' onClick={e=>changeSequence()}></button>
            </Tooltip>
            <Tooltip title="播放列表">
              <button 
                className='sprite_player btn playlist'
                onClick={()=>setIsShowSlide(!isShowSlide)}
                >
                  <span>{playListCount}</span>
                  <CSSTransition in={isShowSlide} timeout={3000} className="playlist">
                    <SliderPlaylist 
                      isShowSlider= {isShowSlide}
                      playListCount = {playListCount}
                      closeWindow={changePlaylistShow}
                      playMusic={forcePlayMusic}
                    />
                  </CSSTransition>
              </button>
            </Tooltip>
              {/* Slide 音量条 */}
              <div
                className="sprite_player top-volume"
                style={{ display: isShowBar ? 'block' : 'none' }}
                onMouseLeave={() => {
                  setIsShowBar(false);
                }}
              >
                <Slider vertical defaultValue={30} onChange={changingVolume} />
              </div>
          </div>
        </Operator>
      </div>
      <audio 
             id="audio"
             ref={audioRef} 
             onTimeUpdate={e=>timeUpdate(e)}
              onEnded={e=>handleMusicEnded(e)}
            />
    </PlaybarWrapper>
  )
})
