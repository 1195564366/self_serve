/**
*** @title：工程配置文件
*** @author：lupan
*** @desc：
*** @date：2019-12-27 13:49:05
**/
import SERVE from './serve'
import Db from './db'
import LOGS from './logs'

export const Serve = SERVE
export const DB = Db
export const Logs = LOGS

export default {
  Serve: SERVE,
  DB: Db,
  Logs: LOGS
}