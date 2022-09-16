import React, { memo } from 'react'
import {useSelector,shallowEqual,useDispatch} from 'react-redux'

import {SongListWrapper} from './style'
import { Skeleton } from 'antd';
import HYSongsCover from '@/components/songs-cover'
export default memo(function MYSongList() {

  //redux
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["songList", "categorySongs"])
  }), shallowEqual);
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;
  const dispatch = useDispatch();
  //
  return (
    <SongListWrapper>
      {!songList.length? <Skeleton active /> : <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              <HYSongsCover key={item.id} info={item} isBy={true}/>
            )
          })
        }
      </div>}
    </SongListWrapper>
  )
})
