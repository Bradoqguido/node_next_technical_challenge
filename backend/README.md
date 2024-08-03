
# Backend

## Run
```sh
npm install
npm run docker-build
npm run docker
npm run docker-init-check
```

## API Routes 

Health Route: The GET /api/v1/health route is used to check the health of the API.

Players Routes:
- GET /api/v1/players: Retrieve all players.
- POST /api/v1/players: Create a new player. 

Games Routes:
- GET /api/v1/games: Retrieve all games.
- POST /api/v1/games: Create a new game.

GameTeams Routes:
- GET /api/v1/teams: Retrieve all teams.
- POST /api/v1/teams: Create a new team.
- POST /api/v1/teams/add-player: Add a player to a team.

## Folder structure
```plaintext
soccer-app-backend/
├── src/
│   ├── controllers/
│   │   ├── gameController.ts
│   │   ├── playerController.ts
│   │   └── teamController.ts
│   ├── models/
│   │   ├── db.ts
│   │   ├── game.ts
│   │   ├── player.ts
│   │   └── team.ts
│   ├── routes/
│   │   ├── gameRoutes.ts
│   │   ├── playerRoutes.ts
│   │   └── teamRoutes.ts
│   ├── app.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── .gitignore
```
