const express = require('express');
const sequelize = require('./db');
const playerRoutes = require('./routes/player');
const gameRoutes = require('./routes/game');
const confirmationRoutes = require('./routes/confirmation');
const teamRoutes = require('./routes/team');

const app = express();
app.use(express.json());

app.use('/api/players', playerRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/confirmations', confirmationRoutes);
app.use('/api/teams', teamRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
