import styled from 'styled-components';

export const SliderPlaylistWapper = styled.div`
  position: absolute;
  left: -458%;
  bottom: 51px;
  width: 986px;
  height: 301px;
  border-radius: 7px;
  cursor: default;
  /* background-color: #bfa; */
`

export const SliderPlaylistHeader = styled.div`
    display: flex;
    height: 40px;
    background: url(${require('@/assets/img/playlist_bg.png')});
    background-position: 0 0;
  .playlist-header-left{
    display: flex;
    justify-content: space-between;
    width: 553px;
    line-height: 39px;
    padding: 0 10px 0 15px;
    .header-title {
      font-size: 14px;
      font-weight: bold;
      color: #e2e2e2;
    }

    .header-icon {
      padding: 5px;
      line-height: 33px;
      color: #ccc;
      span {
        margin-left: 5px;
      }
    }
  }
  .playlist-header-right{
    display: flex;
    align-items: center;
    width: 432px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    .song-name{
      width: 94%;
      text-align: center;
    }
    .close-window{
      width: 5%;
      cursor: pointer;
    }
  }
`

export const SliderPlaylistMain = styled.div`
  display: flex;
  height: 260px;
  background: url(${require('@/assets/img/playlist_bg.png')});
  background-position: -1014px 0;
  background-repeat: repeat-y;
  .main-playlist{
    width: 555px;
    padding-left: 2px;
    /* overflow: auto; */

  }
  .main-line{
    width: 6px;
    height: 258px;
    background: #000;
    margin-top: 2px;
  }
`