const Sequelize=require('sequelize');


const sequelize = new Sequelize("test1", "root", "Sani@123", {
    host: "localhost",
    dialect: "mysql",
  });

  module.exports = sequelize;

  