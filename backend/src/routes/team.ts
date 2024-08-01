const express = require('express');
const Team = require('../infrastructure/models/Team');
const PlayerTeam = require('../infrastructure/models/PlayerTeam');
const router = express.Router();

router.post('/create', async (req, res) => {
    const { gameId, teamName } = req.body;
    try {
        const newTeam = await Team.create({ gameId, teamName });
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/addPlayer', async (req, res) => {
    const { playerId, teamId } = req.body;
    try {
        const newPlayerTeam = await PlayerTeam.create({ playerId, teamId });
        res.status(201).json(newPlayerTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:gameId', async (req, res) => {
    const { gameId } = req.params;
    try {
        const teams = await Team.findAll({ where: { gameId }, include: [PlayerTeam] });
        res.json(teams);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
