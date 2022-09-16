import styled from "styled-components";
export const ArtistCoverWrapper=styled.div`
  width: 130px;
  height: 154px;
  float: left;
  margin-top: 15px;
  position: relative;
  
 .artist-cover-img{
  width:130px;
  height:130px;
  img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .msk{
    background-position: 0 -680px;
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 130px;
  }
 }
 p{
  margin-top: 8px;
 }
`