/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-01 16:45:14
 * @LastEditTime: 2020-09-02 09:52:41
 * @LastEditors: ZQJ-1130123899
 * @Description: vue配置
 * @FilePath: \zvue\vue.config.js
 * @Additional information: NULL
 */
"use strict";
const path = require("path");
const port = 9527;
const name = "ZVUE 0=0";
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
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
    }
    // proxy: {}
    // before: app => {}
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
          "@": resolve("src")
        }
      }
    };
  },
  chainWebpack() {}
};
