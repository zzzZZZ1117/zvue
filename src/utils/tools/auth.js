/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-03 10:11:52
 * @LastEditTime: 2020-09-03 10:39:39
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\utils\tools\auth.js
 * @Additional information: NULL
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
