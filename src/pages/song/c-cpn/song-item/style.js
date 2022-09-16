import styled from 'styled-components'

export const SongItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: 10px;
`
export const SongItemLeft = styled.div`
  flex:3;
  line-height: 16px;
  width: 156px;
  .song-name{
    font-size: 13px;
    color: #333;
    cursor: pointer;
  }
  .song-singer{
    color: #999;
  }
`
export const SongItemRight = styled.div`
  flex:1;
  .font-active {
      font-size: 15px;
      cursor: pointer;
      margin-right: 8px;
    }
    .font-active:active {
      color: #d31111;
    }
    
  .btn {
      width: 17px;
      height: 17px;
      margin-left: 8px;
      cursor: pointer;
      &.addto {
        position: relative;
        top: 2px;
        background-position: 0 -700px;
      }
    }
`
