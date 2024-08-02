import { Request, Response } from 'express';

export const healthCheck = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ ok: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to check api health' });
    }
};
