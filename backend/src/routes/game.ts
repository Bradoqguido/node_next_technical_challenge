const express = require('express');
const Game = require('../infrastructure/models/Game');
const router = express.Router();

router.post('/create', async (req, res) => {
    const { date, minPlayers } = req.body;
    try {
        const newGame = await Game.create({ date, minPlayers });
        res.status(201).json(newGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const game = await Game.findByPk(id);
        if (!game) {
            return res.status(404).json({ error: 'Game not found' });
        }
        res.json(game);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
