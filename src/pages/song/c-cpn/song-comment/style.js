import styled from "styled-components";

export const SongCommentWrapper = styled.div`
    margin-top: 40px;
  .header-comment {
    color: #333;
    font-weight: bold;
    font-size: 16px;
    border-bottom: 1px solid #cfcfcf;
  }
  .ant-comment-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: -10px;
  }
  .comment-like {
    &:hover {
      border-bottom: solid 1px #ccc;
    }
  }
`

export const WonderfulWrapper=styled.div`
  .ant-comment{
    position: relative;
    border-top:1px dotted #ccc;
    .ant-comment-content-detail{
      margin-bottom: 10px;
    }
    .ant-comment-content-author-time{
      position: absolute;
      left: 0px;
      bottom: 0px;
    }
    
    .ant-avatar{
      width: 50px;
      height: 50px;
      border-radius: 0;
      img{
        width: 50px;
        height: 50px;
        border-radius: 0;

      }
    }
  }
`
// 最新评论
export const SoNewWrapper = styled.div`
  .ant-comment{
    position: relative;
    border-top:1px dotted #ccc;
    .ant-comment-content-detail{
      margin-bottom: 10px;
    }
    .ant-comment-content-author-time{
      position: absolute;
      left: 0px;
      bottom: 0px;
    }
    
    .ant-avatar{
      width: 50px;
      height: 50px;
      border-radius: 0;
      img{
        width: 50px;
        height: 50px;
        border-radius: 0;

      }
    }
  }
`