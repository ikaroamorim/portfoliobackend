'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      stack: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      imageAlt: {
        type: Sequelize.STRING
      },
      videoId: {
        type: Sequelize.STRING
      },
      site: {
        type: Sequelize.STRING
      },
      ptTitle: {
        type: Sequelize.STRING
      },
      ptDescription: {
        type: Sequelize.TEXT
      },
      ptShortDescription: {
        type: Sequelize.STRING
      },
      enTitle: {
        type: Sequelize.STRING
      },
      enDescription: {
        type: Sequelize.TEXT
      },
      enShortDescription: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contents');
  }
};