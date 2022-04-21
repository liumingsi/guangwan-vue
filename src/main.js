// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import layer from '../static/js/layer_mobile/layer'
import scroll from 'vue-seamless-scroll'
import wx from 'weixin-js-sdk'
import signature from './utils/signature'
import App from './App'
import router from './router'
import store from './store'
import VueAnimateNumber from 'vue-animate-number'
// 引用API文件
import api from './api/index.js'
// 引用接口文件
import address from './config/index.js'
// 引用工具文件
import {accAdd} from './utils/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api
Vue.prototype.$address = address

// 将工具方法绑定到全局
Vue.prototype.$accAdd = accAdd
Vue.prototype.$layer = layer
Vue.prototype.$wx = wx

Vue.config.productionTip = false
Vue.config.ignoredElements = ['wx-open-launch-weapp']

Vue.use(Vant)
Vue.use(ElementUI)
Vue.use(layer)
Vue.use(scroll)
Vue.use(wx)
Vue.use(signature)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAnimateNumber)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
