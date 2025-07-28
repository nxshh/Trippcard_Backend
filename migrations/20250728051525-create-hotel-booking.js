'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HotelBookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotelId: {
        type: Sequelize.STRING
      },
      hotelName: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      checkInDate: {
        type: Sequelize.DATE
      },
      checkOutDate: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.FLOAT
      },
      user: {
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
    await queryInterface.dropTable('HotelBookings');
  }
};