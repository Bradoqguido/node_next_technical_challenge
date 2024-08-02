import { Request, Response } from 'express';
import { createTeam, addPlayerToTeam, Team } from '../models/team';

export const createTeamHandler = async (req: Request, res: Response) => {
    try {
        const team: Team = req.body;
        const newTeam = await createTeam(team);
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create team' });
    }
};

export const addPlayerToTeamHandler = async (req: Request, res: Response) => {
    try {
        const { teamId, playerId } = req.body;
        await addPlayerToTeam(teamId, playerId);
        res.status(200).json({ message: 'Player added to team' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add player to team' });
    }
};
