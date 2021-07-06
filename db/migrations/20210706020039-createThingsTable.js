'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.createTable('Things', {

       id:{type: Sequelize.INTEGER, autoIncrement:true, primaryKey:true },
       updatedAt:{type:Sequelize.DATE},
       createdAt:{type:Sequelize.DATE},

       name: { type: Sequelize.STRING, allowNull: false },
       
       isTreasure: { type: Sequelize.BOOLEAN, defaultValue: false },
 
      });

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.dropTable('Things');

  }
};