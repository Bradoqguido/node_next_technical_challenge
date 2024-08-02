import pool from '../database/db';

export interface Game {
    id?: number;
    date: Date;
    minPlayers: number;
    createdBy: string;
    confirmedPlayers?: string[];
}

export const createGame = async (game: Game): Promise<Game> => {
    const { date, minPlayers, createdBy } = game;
    const res = await pool.query(
        'INSERT INTO games (date, min_players, created_by) VALUES ($1, $2, $3) RETURNING *',
        [date, minPlayers, createdBy]
    );
    return res.rows[0];
};

export const confirmParticipation = async (gameId: number, playerId: number): Promise<void> => {
    await pool.query(
        'INSERT INTO game_confirmations (game_id, player_id) VALUES ($1, $2)',
        [gameId, playerId]
    );
};

export const getGame = async (gameId: number): Promise<Game> => {
    const res = await pool.query('SELECT * FROM games WHERE id = $1', [gameId]);
    return res.rows[0];
};

export const getGames = async (): Promise<Game[]> => {
    const res = await pool.query('SELECT * FROM games');
    return res.rows;
};
