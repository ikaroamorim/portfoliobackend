'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contents.init({
    url: DataTypes.STRING,
    stack: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    imageAlt: DataTypes.STRING,
    videoId: DataTypes.STRING,
    site: DataTypes.STRING,
    ptTitle: DataTypes.STRING,
    ptDescription: DataTypes.TEXT,
    ptShortDescription: DataTypes.STRING,
    enTitle: DataTypes.STRING,
    enDescription: DataTypes.TEXT,
    enShortDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contents',
  });
  return Contents;
};