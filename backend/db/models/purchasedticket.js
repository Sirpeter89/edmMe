'use strict';
module.exports = (sequelize, DataTypes) => {
  const PurchasedTicket = sequelize.define('PurchasedTicket', {
    ticketId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Tickets' }
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    }
  }, {});
  PurchasedTicket.associate = function(models) {
    // associations can be defined here
  };
  return PurchasedTicket;
};
