/**
*** @title：工程主入口
*** @author：lupan
*** @desc：
*** @date：2019-12-27 13:47:16
**/

import Koa from 'koa2'
import koaBody from 'koa-body'
import koaStaticPlus from 'koa-static-plus'  //静态资源服务插件
import path from 'path'
import bodyParser from 'koa-bodyparser'

// import convert from 'koa-convert'

import { Serve, Logs } from '@config'
import Router from '@router'
import Auth from './generator/index'

const app = new Koa() // 实例化app

app.use(Auth()) // 鉴权中间件

app.use(Logs.accessLogger()) // 日志中间件
app.on('error', err => { // 捕获全局状态下的error
  Logs.systemLogger.error(err)
})


app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 10 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
  }
}))

app.use(bodyParser())

// 配置静态资源
app.use(koaStaticPlus(
  path.join(__dirname, '../public'), {
  pathPrefix: '/public'  //路径前缀
}
))

Object.keys(Router).forEach(item => {
  app.use(Router[item].routes()) // 注册路由
  app.use(Router[item].allowedMethods())
})

// 同步所有模型到数据库

app.listen(Serve.port, err => {
  if (err) {
    console.log('服务启动失败：' + err)
    return
  }
  console.log(`服务启动：http://localhost:${Serve.port}`)
})