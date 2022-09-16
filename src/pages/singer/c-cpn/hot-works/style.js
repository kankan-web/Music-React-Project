import styled from "styled-components";
export const HotWorksWrapper=styled.div`
  margin-top: 20px;
  >div{
    color: #333;
    &:nth-child(2n){
    background-color: #f7f7f7;
  }
    &:nth-child(2n+1){
      background-color: #ffffff;
    }
  }
  
`