'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projects.init({
    imageUrl: DataTypes.STRING,
    imageAlt: DataTypes.STRING,
    site: DataTypes.STRING,
    code: DataTypes.STRING,
    ptTitle: DataTypes.STRING,
    ptDescription: DataTypes.TEXT,
    enTitle: DataTypes.STRING,
    enDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};