import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import healthRoutes from "./routes/health";
import playerRoutes from './routes/player';
import gameRoutes from './routes/game';
import teamRoutes from './routes/team';

const app = express();
const apiVersion: string = 'v1'

app.use(cors());
app.use(bodyParser.json());

app.use(`/api/health`, healthRoutes);
app.use(`/api/players`, playerRoutes);
app.use(`/api/games`, gameRoutes);
app.use(`/api/teams`, teamRoutes);

// app.use(`/api/${apiVersion}/health`, healthRoutes);
// app.use(`/api/${apiVersion}/players`, playerRoutes);
// app.use(`/api/${apiVersion}/games`, gameRoutes);
// app.use(`/api/${apiVersion}/teams`, teamRoutes);

export default app;
