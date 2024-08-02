
# Backend

## Run
```sh
npm install
npm run docker-build
npm run docker
npm run docker-init-check
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
