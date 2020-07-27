
import { AdminModel } from '@model'
import { error } from '@res'

// 后台接口 不校验token 白名单
const writeList = [
  '/admin/login',
  '/admin/outLogin',
]

const Auth = async ( ctx ) => {
  return new Promise(async reslove => {
    let token = ctx.req.headers['access-token']
    if (!token) {
      reslove({
        success: false,
        msg: 'token不能为空'
      })
      return
    }
    const adminResult = await AdminModel.findOne({
      where: {
        token: token
      }
    })
    adminResult ? reslove({
      success: true,
      data: adminResult
    }) : reslove({
      success: false,
      msg: 'token失效'
    })
    reslove({
      success: true,
      data: adminResult
    })
  })
}

module.exports = function () {
  return async function ( ctx, next ) {
    if (ctx.url.startsWith('/admin') && !writeList.includes(ctx.url)) {
      const result = await Auth(ctx)
      if (!result.success) {
        ctx.body = error(result.msg)
        return
      }
      await next()
    } else {
      await next()
    }
  }
}