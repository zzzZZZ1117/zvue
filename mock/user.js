/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-02 11:39:01
 * @LastEditTime: 2020-09-04 14:35:37
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\mock\user.js
 * @Additional information: NULL
 */
const tokens = {
  admin: {
    token: 'admin-token-zzz'
  },
  custorm: {
    token: 'custorm-token-zzz'
  }
}

const users = {
  'admin-token-zzz': {
    roles: ['admin']
  },
  'custorm-token-zzz': {
    roles: ['custorm']
  }
}

module.exports = [
  {
    url: '/zvue/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]
      if (!token) {
        return {
          code: 2333,
          message: '2333'
        }
      }
      return {
        code: 200,
        data: token
      }
    }
  },
  {
    url: '/zvue/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      if (!info) {
        return {
          code: 2333,
          message: 'login failed'
        }
      }

      return {
        code: 200,
        data: info
      }
    }
  }
]
