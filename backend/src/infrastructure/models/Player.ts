const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Player = sequelize.define('Player', {
    name: { type: DataTypes.STRING, allowNull: false },
    level: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
    isGoalkeeper: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Player;
