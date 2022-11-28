'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('countries', [{
      id: 30,
      name: 'Brazil',
      phone: 55,
      code: 'BR'
    }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('countries', null, {});

  }
};
