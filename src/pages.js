const route =  require('./route/index')

module.exports = [
  ...route,
  {
    path: 'packageA/logs',
    subPackage: true,
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '查看启动日志',
    }
  },
]
