const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Team = sequelize.define('Team', {
    gameId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Games', key: 'id' } },
    teamName: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Team;
