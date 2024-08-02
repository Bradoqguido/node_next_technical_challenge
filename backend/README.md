
# Backend

## Run
```sh
npm install
docker-compose -f docker-compose.yml up
npm run dev
```

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
