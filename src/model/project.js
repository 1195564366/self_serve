/**
*** @title：数据库模型，服务项目
*** @param：
*** @author：lupan
*** @desc：
*** @date：2020-05-25 10:26:04
**/

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('project', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true, // 主键
      autoIncrement: true // 自动递增
    },
    name: {
      type: DataTypes.STRING(100),
      comment: '项目名称'
    },
    status: {
      type: DataTypes.BOOLEAN(),
      comment: '项目状态，显示隐藏',
      defaultValue: true
    },
    sort: {
      type: DataTypes.INTEGER(),
      comment: '排序'
    }
  }, {
    paranoid: true
  })
}