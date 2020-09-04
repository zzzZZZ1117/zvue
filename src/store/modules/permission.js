/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-04 14:06:36
 * @LastEditTime: 2020-09-04 14:59:15
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\store\modules\permission.js
 * @Additional information: NULL
 */
import { constantRouterMap, asyncRouterMap } from '@/router'

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

export function filterAsyncRouter(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRouterMap.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.include('admin')) {
        accessedRoutes = asyncRouterMap || []
      } else {
        accessedRoutes = filterAsyncRouter(asyncRouterMap, roles)
      }

      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
