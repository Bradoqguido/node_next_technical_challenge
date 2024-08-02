import { Request, Response } from 'express';
import { createGame, confirmParticipation, getGame, getGames, Game } from '../models/game';

export const createGameHandler = async (req: Request, res: Response) => {
    try {
        const game: Game = req.body;
        const newGame = await createGame(game);
        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create game' });
    }
};

export const confirmParticipationHandler = async (req: Request, res: Response) => {
    try {
        const { gameId, playerId } = req.body;
        await confirmParticipation(gameId, playerId);
        res.status(200).json({ message: 'Participation confirmed' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to confirm participation' });
    }
};

export const getGameHandler = async (req: Request, res: Response) => {
    try {
        const gameId = parseInt(req.params.id);
        const game = await getGame(gameId);
        if (!game) return res.status(404).json({ error: 'Game not found' });
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get game' });
    }
};

export const getGamesHandler = async (_req: Request, res: Response) => {
    try {
        const games = await getGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get games' });
    }
};
