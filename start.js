/**
*** @title：工程启动文件
*** @author：lupan
*** @desc：
*** @date：2019-12-27 13:47:04
**/

// 配置别名
const path = require("path")
require('node-require-alias').setAlias({
    "@controller": path.join(__dirname, "src/controller"),
    "@router": path.join(__dirname, "src/router"),
    "@model": path.join(__dirname, "src/model"),
    "@config": path.join(__dirname, "src/config"),
    '@res': path.join(__dirname, "src/res"),
    '@utils' : path.join(__dirname, "src/utils"),
    '@public' : path.join(__dirname, "public")
})

// babel转换
require('babel-register') ({
  presets: [ 'env' ],
  plugins: [ 'transform-runtime' ]
})

// 修改打印颜色
require('colors')
global.console.err = (msg) => {
  return console.log(msg.toString()['red'])
}
global.console.success = (msg) => {
  return console.log(msg.toString()['green'])
}

module.exports = require('./src/app.js')