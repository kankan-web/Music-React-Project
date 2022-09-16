import styled from "styled-components";
export const SongItemWrapper=styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  .song-item{
    padding: 6px 10px;
    line-height: 18px;
    text-align: left;
    img{
      width: 50px;
      height: 50px;
    }
  }
  .rank-count{
    padding-left: 25px;
    width: 70px;
    color: #999;
  }
  .song-info{
    display: flex;
    justify-content: space-between;
    width: ${(props) => (props.isPic ? '258px' : '328px')};
     
    .left-info{
        .font-active{
          margin-right: 8px;
          font-size: 15px;
          cursor: pointer;
        }
       
        .font-alia{
          color: #aeaeae;
          font-size: 12px;
          margin-right: -25px;
        }
       
    }
    
  }
  .song-operator{
    .operator{
      display: flex;
      align-items: center;
      display: none;
      width: 82px;
      .btn{
        width: 17px;
        height: 17px;
        margin-left: 8px;
        cursor: pointer;
      }
      .play{
        background-position: -267px -268px;
      }
      .addto{
        position: relative;
        top:2px;
        background-position: 0 -700px;
      }
      .favor{
        background-position: -297px -268px;
      }
    }
    .duration {
    width: 91px;
    }
    
  }
  &:hover{
      .operator{
        display: block;
      }
      .duration{
        display: none;
      }
    }
  
`
