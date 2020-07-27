import { SequelizeModel, DictionaryModel } from '@model'
import { success, error } from '@res'
import moment from 'moment'

class Common {
  static async getDictionary (ctx) {
    const result = await DictionaryModel.findAll({
      where: {
        status: true
      }
    })
    ctx.body = success(result)
  }
}

export default Common