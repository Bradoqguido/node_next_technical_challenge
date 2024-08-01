const express = require('express');
const Player = require('../infrastructure/models/Player');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, level, isGoalkeeper } = req.body;
    try {
        const newPlayer = await Player.create({ name, level, isGoalkeeper });
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const players = await Player.findAll();
        res.json(players);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
