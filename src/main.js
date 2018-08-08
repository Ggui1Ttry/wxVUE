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
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
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
          pagePath: 'pages/index',
          text: '首页'
        },
        // {
        //   iconPath: '/static/resources/images/tab/order.png',
        //   selectedIconPath: '/static/resources/images/tab/order-active.png',
        //   pagePath: 'pages/index',
        //   text: '分类'
        // },
        {
          iconPath: '/static/resources/images/tab/cart.png',
          selectedIconPath: '/static/resources/images/tab/cart-active.png',
          pagePath: 'pages/counter',
          text: '购物车'
        },
        {
          iconPath: '/static/resources/images/tab/user.png',
          selectedIconPath: '/static/resources/images/tab/user-active.png',
          pagePath: 'pages/counter',
          text: '我的'
        }
      ]
    }
  }
}
