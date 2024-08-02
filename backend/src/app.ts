import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import playerRoutes from './routes/player';
import gameRoutes from './routes/game';
import teamRoutes from './routes/team';

const app = express();
const apiVersion: string = 'v1'

app.use(cors());
app.use(bodyParser.json());

app.use(`/api/${apiVersion}/players`, playerRoutes);
app.use(`/api/${apiVersion}/games`, gameRoutes);
app.use(`/api/${apiVersion}/teams`, teamRoutes);

export default app;
