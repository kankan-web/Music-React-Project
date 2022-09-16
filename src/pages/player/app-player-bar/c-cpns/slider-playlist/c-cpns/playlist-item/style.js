import styled from "styled-components";

export const PlayListItemWapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  width: 100%;
  height: 28px;
  cursor: pointer;
  margin-top:2px;
  padding-left: 15px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }

  &.active {
    background-color: rgba(0, 0, 0, 0.4);
  }
  .song-name{
    color: #ccc;
  }
  .song-control{
    display: flex;
    margin-left: 40%;
    .anticon-delete,
    .anticon-download,
    .anticon-like,
    .anticon-github {
      opacity: 0;
      color: #ccc;
      font-size: 14px;
      margin: 2px 6px 0;
    }

    .anticon-delete:hover,
    .anticon-download:hover,
    span:hover,
    .anticon-like:hover,
    .anticon-github:hover {
      color: #fff;
    }
  }
  &:hover .anticon-delete,
  &:hover .anticon-download,
  &:hover .anticon-like,
  &:hover .anticon-github {
    opacity: 1;
  }
  .song-info{
    display: flex;
    span{
      margin-right: 25px;
    }
  }
`