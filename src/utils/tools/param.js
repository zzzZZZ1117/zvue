/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-03 14:02:45
 * @LastEditTime: 2020-09-03 14:12:40
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\utils\tools\param.js
 * @Additional information: NULL
 */

/**
 * @name: param2Obj
 * @description: 解析url
 * @param {string} url
 * @return {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

module.exports = {
  param2Obj
}
