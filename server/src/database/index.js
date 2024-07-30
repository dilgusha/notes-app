const path = require('path')
const { Sequelize } = require('sequelize');
const { FORCE } = require('sequelize/lib/index-hints');
const dbPath = path.join(__dirname, '../../db.sqlite')
const sequelize = new Sequelize({ storage: dbPath, dialect: 'sqlite', sync: true, logging: console.log })
// sequelize.sync();
// sequelize.sync({ alter: {drop:false} });
module.exports = {
    sequelize,
};

