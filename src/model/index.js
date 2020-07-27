/**
*** @title：数据库模型 入口文件
*** @author：lupan
*** @desc：
*** @date：2019-12-27 14:23:12
**/

import Sequelize from 'sequelize'
import config from '@config'
const CONFIG_DB = config.DB

// 实例化Sequelize
const sequelize = new Sequelize(CONFIG_DB.database, CONFIG_DB.username, CONFIG_DB.password, {
  host: CONFIG_DB.host,
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4'
  },
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  logging: false
})

sequelize.Admin = sequelize.import('./admin')
sequelize.Project = sequelize.import('./project')
sequelize.Dictionary = sequelize.import('./dictionary')


// 将分类表与数据表关联起来
// sequelize.Class.hasOne(sequelize.Data, {foreignKey: 'cid', sourceKey: 'id'})
// sequelize.Data.belongsTo(sequelize.Class, {foreignKey: 'cid', targetKey: 'id'})

sequelize.sync({force: false, logging: false}).then(() => {
  console.success("数据库同步成功")
}).catch(function(err){
  console.error("数据库同步失败：" + err)
})

export const AdminModel = sequelize.Admin
export const ProjectModel = sequelize.Project
export const DictionaryModel = sequelize.Dictionary