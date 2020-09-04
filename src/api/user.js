/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-03 11:15:44
 * @LastEditTime: 2020-09-04 14:30:27
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\api\user.js
 * @Additional information: NULL
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/zvue/user/login',
    method: 'post',
    data
  })
}
export function getInfo(token) {
  return request({
    url: '/zvue/user/info',
    methods: 'get',
    params: { token }
  })
}
