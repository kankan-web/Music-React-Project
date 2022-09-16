import styled from "styled-components";
export const ModelLoginWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 220px;
  .model-login-img{
    background-position: 0 0 ;
    background-size:contain;
    width: 125px;
    height: 220px;
  }
  .code{
    margin-left: 25px;
    width: 200px;
    text-align: center;
    .code-main{
      position: relative;
      width: 130px;
      height: 130px;
      padding: 4px;
      margin: 13px auto;
      img{
        width: 130px;
        height: 130px;
      }
    }
    p{
      font-size: 12px;
      top: 181px;
      width: 200px;
      right: -15px;
      left: auto;
      line-height: 17px;
      color: rgba(0,0,0,0.4);
    }
  }
`