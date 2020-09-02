/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-01 16:40:26
 * @LastEditTime: 2020-09-02 14:12:57
 * @LastEditors: ZQJ-1130123899
 * @Description: main.js
 * @FilePath: \zvue\src\main.js
 * @Additional information: NULL
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios

import '../mock'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
