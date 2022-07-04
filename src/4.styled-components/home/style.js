import styled from 'styled-components'
export const HomeWrapper = styled.div`
  font-size:20px;
  color: ${props=>props.theme.themeColor};
  .banner{
    background-color: blue;
    span{
      color:#fff;
      /* 方式二* */
      &.active{
        color: #f00;
      }
      &:hover{
        color:green;
      }
      &::after{
        content: 'aaa';
      }
    }

    /* 
    1.方式一
    .active {
      color: #f00;
    } */
  }

`
export const TitleWrapper = styled.h2`
  text-decoration: underline;
`