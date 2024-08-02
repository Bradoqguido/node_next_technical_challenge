import express from 'express';
import { createTeamHandler, addPlayerToTeamHandler } from '../controller/team';

const router = express.Router();

router.post('/create', createTeamHandler);
router.post('/add-player’, addPlayerToTeamHandler');

export default router;
