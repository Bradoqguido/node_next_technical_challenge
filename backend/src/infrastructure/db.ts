const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('soccer_teams', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
