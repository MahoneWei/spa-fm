import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import '@/assets/css/reset.css'
import 'normalize.css'
import '@/assets/response.js'
import config from '@/config'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// vconsole，腾讯大佬出的调试插件
if ( process.env.NODE_ENV !== 'production' || config.debug == true) {
  var Vconsole = require('vconsole/dist/vconsole.min.js')
  var vconsole = new Vconsole()
}
// 实际打包时应该不引入mock
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
