/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-01 16:40:26
 * @LastEditTime: 2020-09-04 11:31:10
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\router\index.js
 * @Additional information: NULL
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home.vue'

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

export const asyncRouterMap = [

]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: constantRouterMap
})

export default router
