'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('location_history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      petId: {
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'pets',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        field: 'pet_id',
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'location_link',
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cityId: {
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'cities',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        field: 'city_id',
      },
      contactId: {
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'contacts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        field: 'contact_id',
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'created_date',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('localtion_history');
  },
};
