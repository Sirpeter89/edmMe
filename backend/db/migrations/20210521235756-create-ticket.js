'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      ticketImg: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      sold: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Events' }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tickets');
  }
};
