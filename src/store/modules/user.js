/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-03 10:48:05
 * @LastEditTime: 2020-09-04 14:28:02
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\store\modules\user.js
 * @Additional information: NULL
 */
import { login, getInfo } from '@/api/user'
import { getToken, setToken } from '@/utils/tools/auth'
// import router, { resetRouter } from '@/router'

const state = {
  token: getToken() ? getToken() : '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login({ commit }, userinfo) {
    const { username, password } = userinfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo({ commit, state }) {
    return Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response
        if (!data) {
          reject('login again')
        }

        const { roles } = data

        if (!roles) {
          reject('no roles')
        }

        commit('SET_ROLES', roles)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
