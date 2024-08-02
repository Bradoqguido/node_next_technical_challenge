import express from 'express';
import { createGameHandler, confirmParticipationHandler, getGameHandler, getGamesHandler } from '../controller/game';

const router = express.Router();

router.post('/create', createGameHandler);
router.post('/confirm', confirmParticipationHandler);
router.get('/:id', getGameHandler);
router.get('/', getGamesHandler);

export default router;
