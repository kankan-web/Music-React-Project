import React, { memo } from 'react'
import {SongDownloadWrapper} from './style'
export default memo(function SongDownload() {
  return (
    <SongDownloadWrapper>
      <div className='header'>网易云音乐多端下载</div>
            <ul className='download-main sprite'>
              <li>
                <a href='https://itunes.apple.com/cn/app/id590338362' rel="noreferrer" target='_blank'>iPhone</a>
              </li>
              <li>
                <a href="https://music.163.com/api/pc/download/latest" rel="noreferrer" target='_blank' className='pc'>PC</a>
              </li>
              <li><a href="https://music.163.com/api/android/download/latest2" rel="noreferrer" target='_blank'>Android</a></li>
            </ul>
            <p>同步歌单,随时畅听320k好音乐</p>
    </SongDownloadWrapper>
  )
})
