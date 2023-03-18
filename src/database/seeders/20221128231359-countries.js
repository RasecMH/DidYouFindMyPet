'use strict';
const fs = require('fs').promises;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const sqlFile = await fs.readFile('src/database/assets/countries.sql', {encoding: "UTF-8"})
    await queryInterface.sequelize.query(sqlFile.replace('`', '\`'))
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('countries', null, {});

  }
};
