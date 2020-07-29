/**
*** @title：章节目录
*** @param：
*** @author：lupan
*** @desc：
*** @date：2020-07-29 14:19:17
**/
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('chapter', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true, // 主键
      autoIncrement: true // 自动递增
    },
    cid: {
      type: DataTypes.INTEGER(),
      comment: '关联课程ID'
    },
    name: {
      type: DataTypes.STRING(50),
      comment: '章节名称'
    },
    intr: {
      type: DataTypes.STRING(255),
      comment: '章节介绍'
    },
    sort: {
      type: DataTypes.INTEGER(),
      comment: '章节排序'
    }
  }, {
    paranoid: true
  })
}