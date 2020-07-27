import { UserModel } from '@model'
import { error } from '@res'

class UserUtils  {
   static getUserId (ctx) {
    return new Promise(async (reslove, reject) => {
      if (!ctx.request.headers.openid) {
        reslove({
          success: false,
          msg: 'openid不能为空'
        })
        return
      }
      // 根据openid查询 用户信息
      const result = await UserModel.findAll({
        where: {
          openid: ctx.request.headers.openid
        }
      })
      if (!result.length) {
        reslove({
          success: false,
          msg: '用户不存在'
        })
        return
      } 
      reslove({
        success: true,
        id: result[0].id
      })
    })
  }
}

export default UserUtils