const commonUI =  require('../usingComponents/index');

module.exports = [
    {
      path: 'pages/order/index', // 页面路径，同时是 vue 文件相对于 src 的路径
      config:{
        navigationBarTitleText: '我的订单',
        //enablePullDownRefresh: true,
        usingComponents:{
          ...commonUI
        }
      }
    },
    {
      path: 'pages/goods/index', // 页面路径，同时是 vue 文件相对于 src 的路径
      config:{
        navigationBarTitleText: '商品详情',
        usingComponents:{
          ...commonUI
        }
      }
    }
]
