import express from 'express';
import { registerPlayer } from '../controller/player';

const router = express.Router();

router.post('/register', registerPlayer);

export default router;
