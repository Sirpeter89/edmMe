'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(50),
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(255),
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
