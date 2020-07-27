/**
*** @title：公用接口
*** @param：
*** @author：lupan
*** @desc：
*** @date：2020-05-27 11:58:14
**/
const Router  = require('koa-router')()
import { CommonController } from '@controller'

Router.prefix('/common')

Router.post('/common/dictionary', CommonController.getDictionary(ctx))

module.exports = Router