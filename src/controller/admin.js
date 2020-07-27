import { SequelizeModel, AdminModel, ProjectModel, DictionaryModel } from '@model'
import { success, error } from '@res'
import moment from 'moment'
import uuid from 'uuid'

const Sequelize = require('sequelize')
const Op = Sequelize.Op

class Admin {

  // 登录
  static async login(ctx) {
    const parmas = ctx.request.body
    const adminResult = await AdminModel.findOne({
      where: {
        account: parmas.account,
        password: parmas.password
      },
      attributes: ['id', 'name', 'account']
    })
    if (!adminResult) {
      ctx.body = error('账号或密码错误')
      return
    }
    // 生成token
    const token = uuid.v4()
    // 生成过期时间 7天过期
    const expirationtime = moment(Math.round(new Date()) + 60 * 60 * 24 * 1000 * 7).format()
    await AdminModel.update({
      token: token,
      expirationtime: expirationtime
    }, {
      where: {
        account: parmas.account,
        password: parmas.password
      }
    })
    adminResult.token = token
    ctx.body = success(adminResult)
  }

  // 后台退出
  static async outLogin(ctx) {
    ctx.body = success()
  }

  // 账号列表
  static async accountList(ctx) {
    const params = ctx.request.body
    const result = await AdminModel.findAndCountAll({
      attributes: ['id', 'name', 'account'],
      order: [
        ['id', 'DESC']
      ],
      offset: (params.pageNo - 1) * params.pageSize,
      limit: Number(params.pageSize)
    })
    ctx.body = success(result)
  }

  // 增加账号
  static async accountAdd(ctx) {
    const params = ctx.request.body
    const accountResult = await AdminModel.findOne({
      where: {
        account: params.account
      }
    })
    if (accountResult) {
      ctx.body = error('账号已存在')
      return
    }
    await AdminModel.create({
      name: params.name,
      password: params.password,
      account: params.account
    })
    ctx.body = success()
  }

  // 编辑账号
  static async accountEdit(ctx) {
    const params = ctx.request.body
    const accountResult = await AdminModel.findOne({
      where: {
        id: params.id
      }
    })
    if (!accountResult) {
      ctx.body = error('记录不存在')
      return
    }
    await AdminModel.update({
      name: params.name,
      password: params.password
    }, {
      where: {
        id: params.id
      }
    })
    ctx.body = success()
  }

  // 删除账号
  static async accountDel(ctx) {
    const params = ctx.request.body
    const adminResult = await AdminModel.findOne({
      where: {
        id: params.id
      }
    })
    if (!adminResult) {
      ctx.body = error('记录不存在')
      return
    }
    await AdminModel.destroy({
      where: {
        id: params.id
      }
    })
    ctx.body = success()
  }

  // 项目列表
  static async projectList (ctx) {
    const params = ctx.request.body
    const result = await ProjectModel.findAndCountAll({
      attributes: ['id', 'name', 'sort', 'status'],
      order: [
        ['id', 'DESC']
      ],
      offset: (params.pageNo - 1) * params.pageSize,
      limit: Number(params.pageSize)
    })
    ctx.body = success(result)
  }

  // 字典列表
  static async dictionaryList (ctx) {
    const result = await DictionaryModel.findAll()
    ctx.body = success(result)
  }

  // 新增字典
  static async dictionaryAdd (ctx) {
    const params = ctx.request.body
    console.log(params)
    const result = await DictionaryModel.findOne({
      where: {
        enumType: params.enumType
      }
    })
    if (result) {
      ctx.body = error('枚举标识已存在')
      return
    }
    const arr = params.data.map(item => {
      return {
        enumType: params.enumType,
        description: params.description,
        itemValue: item.itemValue,
        label: item.label,
        sortNo: item.sortNo,
        status: item.status
      }
    })
    await DictionaryModel.bulkCreate(arr)
    ctx.body = success()
  }

  //删除字典
  static async dictionaryDel (ctx) {
    const params = ctx.request.body
    const result = await DictionaryModel.findOne({
      where: params
    })
    if (!result) {
      ctx.body = error('字典不存在')
      return
    }
    await DictionaryModel.destroy({
      where: params
    })
    ctx.body = success()
  }
}

export default Admin