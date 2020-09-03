/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-01 16:40:26
 * @LastEditTime: 2020-09-03 14:51:32
 * @LastEditors: ZQJ-1130123899
 * @Description: main.js
 * @FilePath: \zvue\src\main.js
 * @Additional information: NULL
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const { mockXHR } = require('../mock')

mockXHR()

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
