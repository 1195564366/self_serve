/**
*** @title：控制器主入口
*** @author：lupan
*** @desc：
*** @date：2019-12-27 13:48:04
**/

// 控制器
import Admin from './admin'
import Common from './common'

export const AdminController = Admin
export const CommonController = Common

export default {
  AdminController,
  CommonController
}