
const Sequelize = require('sequelize');
require('dotenv').config()

const db = new Sequelize('academia', process.env.DB_USER, process.env.PSSWD, {
  host: 'localhost',
  dialect: 'postgres',
  logging:false
});

module.exports=db