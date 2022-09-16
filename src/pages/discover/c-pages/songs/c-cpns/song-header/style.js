import styled from "styled-components";

export const SongHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 4px;
`
export const SongHeaderLeft = styled.div`
display: flex;
align-items: center;
position: relative;
  .title{
    font-size: 24px;
    color: #333;
  }
  .select{
    position: relative;
    top:2px;
    width: 91px;
    height: 31px;
    line-height: 31px;
    color: #0c73c2;
    background-color:#fafafa;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      } 
    i {
      position: relative;
      left: 5px;
      bottom: 2px;
      display: inline-block;
      width: 8px;
      height: 5px;
      background-position: -70px -543px;
    }
  }
`
export const SongHeaderRight = styled.div`
  .hot{
    width: 46px;
    height: 29px;
    background-color: #c20c0c;
    border-radius: 3px;
    color: #fff;
    border: 1px solid #aaa;
    cursor: pointer;
}
`