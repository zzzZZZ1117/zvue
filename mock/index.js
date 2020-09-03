/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-02 11:19:00
 * @LastEditTime: 2020-09-03 14:31:22
 * @LastEditors: ZQJ-1130123899
 * @Description: mock 数据
 * @FilePath: \zvue\mock\index.js
 * @Additional information: NULL
 */
const { param2Obj } = require('../src/utils/tools/param')
const Mock = require('mockjs')

const user = require('./user')

const mocks = [
  ...user
]

function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

module.exports = {
  mocks,
  mockXHR
}
