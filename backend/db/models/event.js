'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    eventImg: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users'}
    }
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};
