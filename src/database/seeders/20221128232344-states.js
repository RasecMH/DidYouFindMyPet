'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('states', [{
      id: 517,
      name: 'Ceará',
      country_id: 30
    }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('states', null, {});

  }
};
