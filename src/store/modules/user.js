/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-03 10:48:05
 * @LastEditTime: 2020-09-03 11:00:05
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\store\modules\user.js
 * @Additional information: NULL
 */
import { login } from '@/api/user'
import { getToken, setToken } from '@/utils/tools/auth'
// import router, { resetRouter } from '@/router'

const state = {
  token: getToken() ? getToken() : ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
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
  }
}

export default {
  state,
  mutations,
  actions
}
