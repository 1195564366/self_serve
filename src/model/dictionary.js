/**
*** @title：字典表模型
*** @param：
*** @author：lupan
*** @desc：
*** @date：2020-05-26 10:27:25
**/
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('dictionary', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true, // 主键
      autoIncrement: true // 自动递增
    },
    enumType: {
      type: DataTypes.STRING(),
      comment: '字典标识'
    },
    itemValue: {
      type: DataTypes.STRING(),
      comment: '字典值'
    },
    label: {
      type: DataTypes.STRING(),
      comment: '字典名称'
    },
    sortNo: {
      type: DataTypes.INTEGER(),
      comment: '字典排序'
    },
    status: {
      type: DataTypes.BOOLEAN(),
      comment: '字典状态，显示/隐藏',
      defaultValue: true
    },
    description: {
      type: DataTypes.STRING(),
      comment: '字典描述'
    }
  }, {
    paranoid: true
  })
}