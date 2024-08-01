const express = require('express');
const Confirmation = require('../infrastructure/models/Confirmation');
const Game = require('../infrastructure/models/Game');
const router = express.Router();

router.post('/confirm', async (req, res) => {
    const { playerId, gameId } = req.body;
    try {
        const confirmation = await Confirmation.findOne({ where: { playerId, gameId } });
        if (confirmation) {
            confirmation.confirmed = true;
            await confirmation.save();
        } else {
            await Confirmation.create({ playerId, gameId, confirmed: true });
        }
        res.status(201).json({ message: 'Player confirmed' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/status/:gameId', async (req, res) => {
    const { gameId } = req.params;
    try {
        const confirmedPlayers = await Confirmation.count({ where: { gameId, confirmed: true } });
        const game = await Game.findByPk(gameId);
        if (!game) {
            return res.status(404).json({ error: 'Game not found' });
        }
        res.json({ confirmedPlayers, minPlayers: game.minPlayers, gameOn: confirmedPlayers >= game.minPlayers });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
