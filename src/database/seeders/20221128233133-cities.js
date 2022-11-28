'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('cities', [{
      id: 8893,
      name: 'Fortaleza',
      state_id: 517
    }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('cities', null, {});

  }
};
