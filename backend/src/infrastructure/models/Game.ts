const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Game = sequelize.define('Game', {
    date: { type: DataTypes.DATE, allowNull: false },
    minPlayers: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Game;
