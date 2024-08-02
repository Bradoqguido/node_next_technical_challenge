import pool from '../database/db';

export interface Team {
    id?: number;
    gameId: number;
    name: string;
    players?: string[];
}

export const createTeam = async (team: Team): Promise<Team> => {
    const { gameId, name } = team;
    const res = await pool.query(
        'INSERT INTO teams (game_id, name) VALUES ($1, $2) RETURNING *',
        [gameId, name]
    );
    return res.rows[0];
};

export const addPlayerToTeam = async (teamId: number, playerId: number): Promise<void> => {
    await pool.query(
        'INSERT INTO team_players (team_id, player_id) VALUES ($1, $2)',
        [teamId, playerId]
    );
};
