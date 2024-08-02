import express from 'express';
import { healthCheck } from '../controller/health';

const router = express.Router();

router.post('/', healthCheck);

export default router;
