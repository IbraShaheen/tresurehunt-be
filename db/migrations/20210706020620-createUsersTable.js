"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
     
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      updatedAt: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE },
      
      username: { type: Sequelize.STRING, allowNull: false, unique: true },
      
      password: { type: Sequelize.STRING, allowNull: false },
      
      email: {
        type: Sequelize.STRING,
        unique: true,
        isEmail: true,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};