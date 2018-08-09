const commonUI = {
  'zan-loadmore': '/libs/zanUI/loadmore/index',
  'i-button': '/libs/iview/button/index',
  'i-panel': '/libs/iview/panel/index',
  'i-notice-bar': '/libs/iview/notice-bar/index',
  'i-card': '/libs/iview/card/index',
  'i-avatar': "/libs/iview/avatar/index",
  'zan-search': '/libs/zanUI/search/index',
  'zan-cell': '/libs/zanUI/cell/index',
  'zan-cell-group': '/libs/zanUI/cell-group/index',
  'zan-row': '/libs/zanUI/row/index',
  'zan-col': '/libs/zanUI/col/index',
  'zan-icon': '/libs/zanUI/icon/index',
  'zan-button': '/libs/zanUI/btn/index'
}

module.exports = [
  {
    path: 'pages/tabbar/home/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config:{
      navigationStyle: 'custom',
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true,
      usingComponents:{
        ...commonUI
      }
    }
  },
  {
    path: 'pages/tabbar/course/kinds/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config:{
      navigationStyle:'default',
      navigationBarTitleText: '课程商店',
      //enablePullDownRefresh: true,
      usingComponents:{
        ...commonUI,
      }
    }
  },
  {
    path: 'pages/tabbar/course/tree/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config:{
      navigationStyle:'default',
      navigationBarTitleText: '树选择',
      //enablePullDownRefresh: true,
      usingComponents:{
        ...commonUI,
        'zan-tree-select': '/libs/zanUI/tree-select/index'
      }
    }
  },
  {
    path: 'pages/tabbar/user/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config:{
      navigationStyle:'default',
      navigationBarTitleText: '我的',
      //enablePullDownRefresh: true,
      usingComponents:{
        ...commonUI
      }
    }
  },
  {
    path: 'packageA/logs',
    subPackage: true,
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '查看启动日志',
    }
  },
]
