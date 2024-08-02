import pool from '../database/db';

export interface Player {
    id?: number;
    name: string;
    level: number;
    isGoalkeeper: boolean;
}

export const createPlayer = async (player: Player): Promise<Player> => {
    const { name, level, isGoalkeeper } = player;
    const res = await pool.query(
        'INSERT INTO players (name, level, is_goalkeeper) VALUES ($1, $2, $3) RETURNING *',
        [name, level, isGoalkeeper]
    );
    return res.rows[0];
};
