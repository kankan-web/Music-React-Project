import { Redirect } from 'react-router-dom'
import React from 'react'


const MYDiscover = React.lazy(() => import("@/pages/discover"));
const MYDiscoverRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const MYDiscoverRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const MYDiscoverSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const MYDiscoverDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const MYDiscoverArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const MYDiscoverAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
// const MYSongDetail = React.lazy(_ => import("../pages/player"));

const MYFriend = React.lazy(_ => import("../pages/friend"));
const MYMine = React.lazy(_ => import("../pages/mine"));

const MYSongDetail = React.lazy(_=>import("../pages/song"));

const MYSonglist = React.lazy(_=>import("../pages/song-list"))

const MYSinger = React.lazy(_=>import("../pages/singer"))
const MYSingerHotWorks =React.lazy(_=>import("../pages/singer/c-cpn/hot-works"))
const MYSingerAlbum = React.lazy(_=>import('../pages/singer/c-cpn/singer-album'))
const MYSingerDesc = React.lazy(_=>import('../pages/singer/c-cpn/singer-desc'))

const MYAlbum = React.lazy(_=>import('../pages/album'))

const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/discover" /> },
  {
    path:'/discover',component: MYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: MYDiscoverRecommend
      },
      {
        path: "/discover/ranking",
        component: MYDiscoverRanking
      },
      {
        path: "/discover/songs",
        component: MYDiscoverSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: MYDiscoverDjradio
      },
      {
        path: "/discover/artist",
        component: MYDiscoverArtist
      },
      {
        path: "/discover/album",
        component: MYDiscoverAlbum
      },
    
    ]
  },
  {
    path:'/friend',
    component: MYFriend
  },
  {
    path:'/mine',
    component: MYMine
  },
  {
    path:'/song',
    component:MYSongDetail,
  },
  {
    path:'/songList',
    exact: true,
    component:MYSonglist
  },
  {
    path:'/singer',
    component:MYSinger,
    routes:[
      {
        path: "/singer",
        exact:true,
        render:()=><Redirect to='/singer/hotworks'/>
      },
      {
        path:'/singer/hotworks',
        component: MYSingerHotWorks,
      },
      {
        path:'/singer/album',
        component:MYSingerAlbum,
      },{
        path:'/singer/desc',
        component:MYSingerDesc,
      }
    ]
  },
  {
    path:'/album',
    component:MYAlbum,
  }
]
export default routes;