/**
*** @title：视频课程
*** @param：
*** @author：lupan
*** @desc：
*** @date：2020-07-29 14:19:17
**/
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('course', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true, // 主键
      autoIncrement: true // 自动递增
    },
    name: {
      type: DataTypes.STRING(50),
      comment: '课程名称'
    },
    intr: {
      type: DataTypes.STRING(255),
      comment: '课程介绍'
    }
  }, {
    paranoid: true
  })
}