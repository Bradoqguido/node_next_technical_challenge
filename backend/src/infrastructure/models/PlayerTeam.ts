const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const PlayerTeam = sequelize.define('PlayerTeam', {
    playerId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Players', key: 'id' } },
    teamId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Teams', key: 'id' } },
});

module.exports = PlayerTeam;
