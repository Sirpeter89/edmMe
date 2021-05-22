'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookmarkedEvent = sequelize.define('BookmarkedEvent', {
    eventId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Events' }
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    }
  }, {});
  BookmarkedEvent.associate = function(models) {
    // associations can be defined here
  };
  return BookmarkedEvent;
};
