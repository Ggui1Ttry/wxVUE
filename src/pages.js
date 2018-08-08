module.exports = [
  {
    path: 'pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config:{
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true,
      usingComponents:{
        'i-button': '/libs/iview/button/index',
        'i-panel': '/libs/iview/panel/index',
        'i-notice-bar': '/libs/iview/notice-bar/index',
        'i-card': '/libs/iview/card/index',
        'i-avatar': "/libs/iview/avatar/index",
        'zan-search': '/libs/zanUI/search/index',
        'zan-cell': '/libs/zanUI/cell/index',
        'zan-cell-group': '/libs/zanUI/cell-group/index',
        'zan-row': '/libs/zanUI/row/index',
        'zan-col': '/libs/zanUI/col/index'
      }
    }
  }, {
    path: 'pages/counter'
  }, {
    path: 'packageA/logs',
    subPackage: true,
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '查看启动日志',
    }
  },
  // {
  //   path: 'components/sale/groupItem',
  //   config:{
  //     usingComponents:{
  //       'i-button': '/libs/iview/button/index',
  //       'i-panel': '/libs/iview/panel/index',
  //       'i-notice-bar': '/libs/iview/notice-bar/index',
  //       'i-card': '/libs/iview/card/index',
  //       'i-avatar': "/libs/iview/avatar/index",
  //       'zan-search': '/libs/zanUI/search/index',
  //       'zan-cell': '/libs/zanUI/cell/index',
  //       'zan-cell-group': '/libs/zanUI/cell-group/index'
  //     }
  //   }
  // },
]
