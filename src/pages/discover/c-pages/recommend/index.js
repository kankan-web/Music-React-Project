import React, { memo } from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
import MYTopBanner from './c-cpns/top-banner'
import MYHotRecommend from './c-cpns/hot-recommend'
import MYNewAlbum from './c-cpns/new-album'
import MYRecommendRanking from './c-cpns/recommend-ranking'
import MYUserLogin from './c-cpns/user-login'
import MYHotAnchor from './c-cpns/hot-anchor'
import MYSettleSinger from './c-cpns/settle-singer'

function MYRecommend(props) {//推荐页面
  return (
    <RecommendWrapper>
      {/* 轮播图 */}
      <MYTopBanner/>
      {/* 主体内容 */}
      <Content className='wrap-v2'>
        {/* 主体推荐页作出 */}
        <RecommendLeft>
          {/* 热门推荐 */}
          <MYHotRecommend/>
          {/* 新碟上架 */}
          <MYNewAlbum/>
          {/* 榜单 */}
          <MYRecommendRanking/>
        </RecommendLeft>
        {/* 主体推荐页右侧 */}
        <RecommendRight>
          {/*登录 */}
          <MYUserLogin />
          <MYSettleSinger/>
          <MYHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default memo(MYRecommend);

// import React, { memo, useEffect } from 'react'
// import {connect}from 'react-redux'
// import { getTopBannerAction } from './store/actionCreators'
// function MYRecommend(props) {
//   const {getBanners,topBanners} = props
//   useEffect(()=>{
//     getBanners();
//   },[getBanners])
//   return (
//     <div>
//       MYRecommend:{topBanners.length}
//     </div>
//   )
// }
// const mapStateToProps = state=>({
//   topBanners:state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch=>({
//   getBanners:()=>{
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(MYRecommend));
