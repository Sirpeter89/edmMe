'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(10,2),
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    ticketImg: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    sold: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    eventId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Events'}
    }
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};
