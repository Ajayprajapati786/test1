const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const User = sequelize.define("user", {
    price: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.TEXT,
    },
    category: {
      type: Sequelize.TEXT,
    },
  });

  module.exports = User;