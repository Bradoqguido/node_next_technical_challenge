import { Request, Response } from 'express';
import { createPlayer, Player } from '../models/player';

export const registerPlayer = async (req: Request, res: Response) => {
    try {
        const player: Player = req.body;
        const newPlayer = await createPlayer(player);
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).json({ error: 'Failed to register player' });
    }
};
