/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-01 16:45:14
 * @LastEditTime: 2020-09-04 17:10:30
 * @LastEditors: ZQJ-1130123899
 * @Description: vue配置
 * @FilePath: \zvue\vue.config.js
 * @Additional information: NULL
 */
'use strict'
const path = require('path')
const port = 9527
const name = 'ZVUE 0=0'
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  devServer: {
    // host: "0.0.0.0",
    port: port,
    // https: false--,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {}
    before: require('./mock/mockServer')
  },
  // parallel: require("os").cpus().length > 1,
  // eslint-disable-next-line no-unused-vars
  configureWebpack: config => {
    // if(process.env.NODE_ENV === 'production') {

    // }else{

    // }
    return {
      name: name,
      // plugins: [

      // ],
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
