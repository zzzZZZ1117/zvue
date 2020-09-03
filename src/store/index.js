/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-01 16:40:26
 * @LastEditTime: 2020-09-03 10:46:27
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\store\index.js
 * @Additional information: NULL
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  getters,
  modules
})
