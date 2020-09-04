/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-04 10:58:31
 * @LastEditTime: 2020-09-04 14:05:05
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\permission.js
 * @Additional information: NULL
 */
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/tools/auth'
import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      try {
        const { roles } = await store.dispatch('user/getInfo')
        const accessRouters = await store.dispatch('permission/generateRoutes', roles)

        router.addRoutes(accessRouters)

        next({ ...to, replace: true })
      } catch (error) {
        Message.error(error || 'Has Error')
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
