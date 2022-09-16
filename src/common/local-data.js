export const headerLinks = [
  {
    title: "发现音乐",
    link: "/discover"
  },
  {
    title: "我的音乐",
    link: "/mine"
  },
  // {
  //   title: "朋友",
  //   link: "/friend"
  // },
  {
    title: "商城",
    link: "https://music.163.com/store/product"
  },
  {
    title: "音乐人",
    link: "https://music.163.com/nmusician/web/index#/"
  },
  {
    title: "下载客户端",
    link: "https://music.163.com/#/download"
  }
]

export const footerLinks = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service"
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy"
  },
  {
    title: "儿童隐私政策",
    link: "https://st.music.163.com/official-terms/children"
  },
  {
    title: "版权投诉指引",
    link: "https://music.163.com/st/staticdeal/complaints.html"
  },
  {
    title: "意见反馈",
    link: "#"
  }
]

export const footerImages = [
  {
    link: "https://music.163.com/st/userbasic#/auth"
  },
  {
    link: "https://music.163.com/recruit"
  },
  {
    link: "https://music.163.com/web/reward"
  },
  {
    link: "https://music.163.com/uservideo#/plan"
  }
]


// discover中的数据
export const discoverMenu = [
  {
    title: "推荐",
    link: "/discover/recommend"
  },
  {
    title: "排行榜",
    link: "/discover/ranking"
  },
  {
    title: "歌单",
    link: "/discover/songs"
  },
  {
    title: "歌手",
    link: "/discover/artist"
  },
  // {
  //   title: "新碟上架",
  //   link: "/discover/album"
  // },
]

// 热门主播
export const hotRadios = [
  {
    picUrl:
      'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg',
    name: '陈立',
    position: '心理学家、美食家陈立教授',
    // url: '/user/home?id=278438485',
    url: '/discover',
  },
  {
    picUrl:
      'http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg',
    name: 'DJ艳秋',
    position: '著名音乐节目主持人',
    // url: '/user/home?id=91239965',
    url: '/discover',
  },
  {
    picUrl:
      'http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg',
    name: '国家大剧院古典音乐频道',
    position: '国家大剧院古典音乐官方',
    // url: '/user/home?id=324314596',
    url: '/discover',
  },
  {
    picUrl:
      'http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg',
    name: '谢谢收听',
    position: '南京电台主持人王馨',
    // url: '/user/home?id=1611157',
    url: '/discover',
  },
  {
    picUrl:
      'http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg',
    name: 'DJ晓苏',
    position: '独立DJ，CRI环球旅游广播特邀DJ',
    // url: '/user/home?id=2313954',
    url: '/discover',
  },
]

//歌手分类
export const artistCategory=[
  {
    name:'推荐歌手',
    title:'推荐',
    type:-1,
    area:-1,
    url:''
  },{
    name:'入驻歌手',
    src:'/signed/',
    title:'推荐',
    type:-1,
    area:-1,
    url:'/signed/'
  },{
    name:'华语男歌手',
    title:'华语',
    id:1001,
    type:1,
    area:7,
    url:'/cat?'
  },{
    name:"华语女歌手",
    title:'华语',
    id:1002,
    type:2,
    area:7,
    url:'/cat?'
  },{
    name:'华语组合/乐队',
    title:'华语',
    id:1003,
    type:3,
    area:7,
    url:'/cat?'
  },{
    name:"欧美男歌手",
    title:'欧美',
    id:2001,
    type:1,
    area:96,
    url:'/cat?'
  },{
    name:'欧美女歌手',
    title:'欧美',
    id:2002,
    type:2,
    area:96,
    url:'/cat?'
  },{
    name:'欧美组合/乐队',
    title:'欧美',
    id:2003,
    type:3,
    area:96,
    url:'/cat?'
  },{
    name:'日本男歌手',
    title:'日本',
    id:6001,
    type:1,
    area:8,
    url:'/cat?'
  },{
    name:'日本女歌手',
    title:'日本',
    id:6002,
    type:2,
    area:8,
    url:'/cat?'
  },{
    name:'日本组合/乐队',
    title:'日本',
    id:6003,
    type:3,
    area:8,
    url:'/cat?'
  },{
    name:'韩国男歌手',
    title:'韩国',
    id:7001,
    type:1,
    area:16,
    url:'/cat?'
  },{
    name:'韩国女歌手',
    title:'韩国',
    id:7002,
    type:2,
    area:16,
    url:'/cat?'
  },{
    name:'韩国组合/乐队',
    title:'韩国',
    id:7003,
    type:3,
    area:16,
    url:'/cat?'
  },{
    name:'其他男歌手',
    title:'其他',
    id:4001,
    type:1,
    area:0,
    url:'/cat?'
  },{
    name:'其他女歌手',
    title:'其他',
    id:4002,
    type:2,
    area:0,
    url:'/cat?'
  },{
    name:'其他组合/乐队',
    title:'其他',
    id:4003,
    type:3,
    area:0,
    url:'/cat?'
  }
]

export const singerMenu=[
  {
    title:'热门作品',
    link:'/singer/hotworks'
  },{
    title:'所有专辑',
    link:'/singer/album'
  },{
    title:'艺人介绍',
    link:'/singer/desc'
  }
]
