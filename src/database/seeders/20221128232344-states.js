'use strict';
const fs = require('fs').promises;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const sqlFile = await fs.readFile('src/database/assets/states.sql',{encoding: "UTF-8"})
    const sqlFile2 = await fs.readFile('src/database/assets/states2.sql',{encoding: "UTF-8"})
    await queryInterface.sequelize.query(sqlFile.replace('`', '\`'))
    await queryInterface.sequelize.query(sqlFile2.replace('`', '\`'))
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('states', null, {});

  }
};
