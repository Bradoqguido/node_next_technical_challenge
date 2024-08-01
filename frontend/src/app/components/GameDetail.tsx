import React, { useState, useEffect } from 'react';
import axios from '../infraestructure/axiosConfig';
import { useRouter } from 'next/router';
import PlayerConfirmation from './PlayerConfirmation';
import TeamManagement from './TeamManagement';
import { Game } from '../types';

const GameDetail: React.FC = () => {
    const router = useRouter();
    const { gameId } = router.query;
    const [game, setGame] = useState<Game | null>(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(`/api/games/${gameId}`);
                setGame(response.data);
            } catch (error) {
                console.error('Error fetching game:', error);
            }
        };

        if (gameId) fetchGame();
    }, [gameId]);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Game Detail</h2>
            <p>Date: {new Date(game.date).toLocaleString()}</p>
            <p>Minimum Players: {game.minPlayers}</p>
            <PlayerConfirmation gameId={game.id} />
            <TeamManagement gameId={game.id} />
        </div>
    );
};

export default GameDetail;
