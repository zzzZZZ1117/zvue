/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-01 16:45:14
 * @LastEditTime: 2020-09-01 17:45:36
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
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  chainWebpack() {}
};
