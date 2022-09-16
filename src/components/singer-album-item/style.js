import styled from "styled-components";
export const SingerAlbumItemWrapper = styled.li`
  float: left;
  display: inline-block;
  width: 162px;
  height: 175px;
  padding:0 0 30px 18px;
  line-height: 1.4;
  .album-img{
    width: 120px;
    height: 120px;
    position: relative;
    display: block;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
    .mask{
      position: absolute;
      top:0;
      left: 0;
      width: 145px;
      height: 120px;
      background-position: -170px -850px;
    }
    /* .player{
      position: absolute;
      right:10px;
      bottom: 5px;
      width: 28px;
      height: 28px;
      background-position: 0 -140px; 
    } */
  }
  .album-name{
    line-height: 19px;
    max-height: 38px;
    margin:8px 0 3px;
    font-size: 14px;
    a{
      color: #000;
    }
  }
  .album-year{
    width: 100%;
    span{
      color: #666;
    }
  }
`