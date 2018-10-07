import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 引入懒加载模块
import VueLazyload from 'vue-lazyload';
// 配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 图片请求失败 就会用 error 里的图片替换原图片
  error: require('../static/img/mo.jpg'),
  // 正在请求图片的时候用 loading 里的图片暂时替代
  loading: require('../static/img/minLoading.gif'),
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
