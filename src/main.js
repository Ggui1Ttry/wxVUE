import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(MpvueRouterPatch);

Vue.config.productionTip = false
App.store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [],
    window: {
      //navigationStyle:'custom',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '舞蹈培训',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#1292D6',
      borderStyle: 'white',
      backgroundColor: '#FAFAFA',
      list: [
        {
          iconPath: '/static/resources/images/tab/home.png',
          selectedIconPath: '/static/resources/images/tab/home-active.png',
          pagePath: 'pages/tabbar/home/index',
          text: '首页'
        },
        {
          iconPath: '/static/resources/images/tab/course-shop.png',
          selectedIconPath: '/static/resources/images/tab/course-shop-active.png',
          pagePath: 'pages/tabbar/course/kinds/index',
          text: '课程集市'
        },
        {
          iconPath: '/static/resources/images/tab/user.png',
          selectedIconPath: '/static/resources/images/tab/user-active.png',
          pagePath: 'pages/tabbar/user/index',
          text: '我的'
        }
      ]
    }
  }
}
