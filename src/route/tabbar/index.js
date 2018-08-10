const commonUI =  require('../usingComponents/index');

module.exports = [
  {
    path: 'pages/tabbar/home/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config:{
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
      navigationBarTitleText: '我的',
      //enablePullDownRefresh: true,
      usingComponents:{
        ...commonUI
      }
    }
  },
];
