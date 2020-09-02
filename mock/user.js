/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-02 11:39:01
 * @LastEditTime: 2020-09-02 14:15:12
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\mock\user.js
 * @Additional information: NULL
 */
const demoList = [{
  id: 1,
  name: 'zs',
  age: '23',
  job: '前端工程师'
}, {
  id: 2,
  name: 'ww',
  age: '24',
  job: '后端工程师'
}]

export default {
  'get|/parameter/query': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    }
  }
}
