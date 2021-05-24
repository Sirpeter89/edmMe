'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(50),
      validate: {
        len: [4,50],
        isNotEmail(value){
          if (Validator.isEmail(value)){
            throw new Error ('Cannot be an email')
          }
        }
      }
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(50),
      validate: {
        len: [1,50],
        isNotEmail(value){
          if (Validator.isEmail(value)){
            throw new Error ('Cannot be an email')
          }
        }
      }
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(50),
      validate: {
        len: [1,50],
        isNotEmail(value){
          if (Validator.isEmail(value)){
            throw new Error ('Cannot be an email')
          }
        }
      }
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(255),
      isNotEmail(value){
        if (!Validator.isEmail(value)){
          throw new Error ('Needs to be a valid email')
        }
      }
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validate: {
        len: [60,60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });

  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, userName, email } = this; // context will be the User instance
    return { id, userName, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          userName: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ userName, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      userName,
      email,
      firstName,
      lastName,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
