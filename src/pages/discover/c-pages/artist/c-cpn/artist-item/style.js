import styled from "styled-components";
export const ArtistItemWrapper=styled.div`
  margin-top:50px;
  padding:0 10px 40px 10px;
  .category-title{
    color: #333;
    padding-left: 10px;
  }
  .category-title-line{
    border-top:1px solid #ccc;
    padding-top:10px ;
  }
  .category-item-last{
    margin-bottom:10px;
  }
  .category-item{
    padding: 5px 10px;
    cursor: pointer;
    
    .category-name{
      line-height: 10px;
      &::before{
      content: ' ';
      display: inline-block;
      padding: 2px;
      margin-bottom: 2px;
      margin-right: 5px;
        /* color:; */
      background:#afafaf;
    }
    }
  }
  .active{
    background:#fbfbfb;
    border: 1px solid #dadada;
    a{
      color: #c20c0c;
    }
  }
`