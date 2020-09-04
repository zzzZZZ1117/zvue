/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-04 16:58:54
 * @LastEditTime: 2020-09-04 17:03:11
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\icons\index.js
 * @Additional information: NULL
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
