import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'
import Vuex from 'vuex'
import moment from 'dayjs'

const Fly = require("flyio/dist/npm/wx")
const fly = new Fly

fly.config.baseURL= 'http://localhost:3000'

Vue.use(VHtmlPlugin)
Vue.use(Vuex)


Vue.prototype.$fly = fly
Vue.prototype.$moment = moment

const store = require('./store').default
Vue.prototype.$store = store

const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      "pages/index/Index",
      "pages/singer/index",
      "pages/me/index",
      "pages/searchList/index",
      "pages/singerDetail/index",
      "pages/register/index",
      "pages/login/index",
      // "pages/edit/index"
    ],
    tabBar: {
      "color": "#999",
      "backgroundColor": "#fafafa",
      "selectedColor": "#333",
      "borderStyle": "white",
      "list": [
        {
          "text": "首页",
          "pagePath": "pages/index/Index",
          "iconPath": "native/tabs/home.png",
          "selectedIconPath": "native/tabs/home-active.png"
        },
        {
          "text": "歌手",
          "pagePath": "pages/singer/index",
          "iconPath": "native/tabs/singer.png",
          "selectedIconPath": "native/tabs/singer-active.png"
        },
        {
          "text": "我的",
          "pagePath": "pages/me/index",
          "iconPath": "native/tabs/me.png",
          "selectedIconPath": "native/tabs/me-active.png"
        }
      ],
      "position": "bottom"
    },
    window: {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#c10d0d",
      "navigationBarTitleText": "网易云音乐",
      "navigationBarTextStyle": "white"
    }
  }
}
