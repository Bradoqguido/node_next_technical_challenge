const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Confirmation = sequelize.define('Confirmation', {
    playerId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Players', key: 'id' } },
    gameId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Games', key: 'id' } },
    confirmed: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Confirmation;
