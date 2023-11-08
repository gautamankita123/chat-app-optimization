const Sequelize = require('sequelize');

const sequelize = new Sequelize('expence', 'root', 'mysql@1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
