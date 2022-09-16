import styled from "styled-components";
import { ICons } from '@/assets/css/common'
export const AlbumInfoWrapper = styled(ICons)`
  
  
`
export const SongerCoverImg = styled.div`
    position: relative;
    span{
      position: absolute;
      top: 0;
      left: 0;
      width: 209px;
      height: 177px;
      background-position: 0 -986px;
    }
`
export const SongDetailWrapper = styled.div`
    float: right;
    width: 100%;
    margin-left: 55px;
    margin-bottom: 30px;
    font-size: 14px;
    .detail-title-wrapper {
      display: flex;
      margin-bottom: 12px;
      .sprite_icon2{
        width: 54px;
        height: 24px;
        background-position: 0 -243px;
        margin-right: 12px;
      }
      .detail-title {
        line-height: 24px;
        font-size: 20px;
      }
    }
    .intr{
      margin-top: 4px;
      line-height: 18px;
      color: #666;
      font-size: 12px;
      b{
        display: inline-block;
        font-weight: normal;
        color: #666;
        margin-right:5px;
      }
      span>a{
        color: #0c73c2;
      }
    }
    .controls {
      margin:20px -10px 25px 0;
      display: flex;
      .play {
        position: relative;
        color: #fff;
        width: 66px;
        height: 31px;
        padding: 0 5px 0 0;
        margin-right: 35px;
        line-height: 31px;
        background-position: right -428px;
        cursor: pointer;

        .play-icon {
          width: 20px;
          height: 18px;
          margin: 6px 2px 2px 0;
          background-position: 0 -1622px;
          overflow: hidden;
        }

        &:after {
          content: '';
          position: absolute;
          right: -29px;
          top: 0;
          bottom: 0;
          width: 31px;
          background: url(${require('@/assets/img/sprite_button.png')}) 0 9999px;
          background-position: 0 -1588px;
        }
      }

      .inner {
        display: flex;
        width: 100%;
        height: 31px;
        padding: 0 7px 0 4px;
        background-position: 0 -387px;
        line-height: 31px;
      }

      .favorite,
      .share,
      .download,
      .comment {
        background-position: right -1020px;
        margin-right: 5px;
        padding: 0 5px 0 0;
        cursor: pointer;
      }

      .favorite > .inner,
      .share > .inner,
      .download > .inner,
      .comment > .inner {
        padding-right: 2px;
        padding-left: 28px;
      }

      .favorite {
        background-position: right -1020px;
        .inner {
          background-position: 0 -977px;
        }
      }

      .share {
        .inner {
          background-position: 0 -1225px;
        }
      }

      .download {
        .inner {
          background-position: 0 -2761px;
        }
      }

      .comment {
        .inner {
          background-position: 0 -1465px;
        }
      }
    }
`