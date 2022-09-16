import styled from "styled-components";

export const ArtisMainOneWrapper = styled.div`
  width:100%;

  .artist-main{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .artist-item{
    margin-top: 30px;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top:1px dotted #ccc;
    li{
      width: 130px;
      height: 30px;
      line-height: 30px;
      margin-left: 10px;
      font-weight: 600;
    }
  }
`