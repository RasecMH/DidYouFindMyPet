'use strict';
const fs = require('fs').promises;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const sqlFile = await fs.readFile('src/database/assets/cities.sql', {encoding: "UTF-8"})
    const sqlFiles = sqlFile.split(";");
    const seedCities = sqlFiles.map(async (file) => {
      return queryInterface.sequelize.query(file.replace('`', '\`'))

    })
    await Promise.all(seedCities)
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('cities', null, {});

  }
};
