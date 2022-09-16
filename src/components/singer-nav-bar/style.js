import styled from "styled-components";

export const SingerNavBarWrapper = styled.ul`
  height: 39px;
  border: 1px solid #ccc;
  border-width:0 1px;
  background-position: 0 0;
  background-repeat: repeat-x;
  li,em,a{
    float: left;
    height: 39px;
    font-size: 14px;
  }
  .item{
    em{
      height: 37px;
      width: 134px;
      padding:2px 2px 0 0;
      line-height:37px;
      cursor: pointer;
      text-align: center;
    }
    .active{
      background-position: left -90px;
    }
  }
`