/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-04 17:28:51
 * @LastEditTime: 2020-09-04 17:29:50
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\utils\tools\validate.js
 * @Additional information: NULL
 */
/**
 * @name: isExternal
 * @description:
 * @param {string} path
 * @return {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
