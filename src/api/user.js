/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-03 11:15:44
 * @LastEditTime: 2020-09-03 11:19:00
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
