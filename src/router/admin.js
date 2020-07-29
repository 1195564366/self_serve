/**
*** @title：后台接口
*** @author：lupan
*** @desc：
*** @date：2019-12-27 17:48:09
**/
const Router  = require('koa-router')()
import { AdminController } from '@controller'

Router.prefix('/admin')

// 登录
Router.post('/login', async ctx => await AdminController.login(ctx))
// 退出
Router.post('/outLogin', async ctx => await AdminController.outLogin(ctx))

// 账号列表
Router.post('/account/list', async ctx => await AdminController.accountList(ctx))

// 增加账号
Router.post('/account/add', async ctx => await AdminController.accountAdd(ctx))

// 编辑账号
Router.post('/account/edit', async ctx => await AdminController.accountEdit(ctx))

// 删除账号
Router.post('/account/del', async ctx => await AdminController.accountDel(ctx))

// 项目列表
Router.post('/project/list', async ctx => await AdminController.projectList(ctx))

// 字典列表
Router.post('/dictionary/list', async ctx => await AdminController.dictionaryList(ctx))

// 添加字典
Router.post('/dictionary/add', async ctx => await AdminController.dictionaryAdd(ctx))

// 删除字典
Router.post('/dictionary/del', async ctx => await AdminController.dictionaryDel(ctx))

// 课程列表
Router.get('/course/list', async ctx => await AdminController.courseList(ctx))
// 新增课程
Router.post('/course/add', async ctx => await AdminController.courseAdd(ctx))

// 章节列表
Router.get('/chapter/list', async ctx => await AdminController.chapterList(ctx))
// 新增章节
Router.post('/chapter/add', async ctx => await AdminController.chapterAdd(ctx))

module.exports = Router