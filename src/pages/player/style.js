import styled from 'styled-components';

export const SongDetailWrapper = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`


export const SongLeft = styled.div`
  width: 720px;
  padding: 47px 30px 40px 39px;
`

export const SongRight = styled.div`
  width: 270px;
  padding: 20px 30px 30px;
  
  .similar-playlist-main{
    
  }
  

  .similar-playlist .header,.pelated-playlist .header{
    font-size: 12px;
    color: #333;
    padding-bottom:2px;
    margin:15px 0;
    border-bottom: 1px solid #ccc;
    font-weight: 700;
  }
`