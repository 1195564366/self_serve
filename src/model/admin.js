/**
*** @title：后台用户数据模型
*** @author：lupan
*** @desc：
*** @date：2019-12-27 14:34:37
**/

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('admin', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true, // 主键
      autoIncrement: true // 自动递增
    },
    name: {
      type: DataTypes.STRING(100),
      comment: '姓名'
    },
    account: {
      type: DataTypes.STRING(100),
      unique: true, // 唯一性
      comment: '账号'
    },
    password: {
      type: DataTypes.STRING(100),
      comment: '密码'
    },
    token: {
      type: DataTypes.STRING(100),
      comment: 'token'
    },
    expirationtime: {
      type: DataTypes.DATE(),
      comment: 'token失效时间'
    }
  }, {
    paranoid: true
  })
}