import { useEffect, useState } from 'react';
import api from '../services/api';

type Player = {
    id: number;
    name: string;
    level: string;
    is_goalkeeper: boolean;
};

const Players = () => {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await api.get('/players');
                setPlayers(response.data);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchPlayers();
    }, []);

    return (
        <div>
            <h2>Players</h2>
            <ul>
                {players.map(player => (
                    <li key={player.id}>
                        {player.name} - {player.level} {player.is_goalkeeper ? '(Goalkeeper)' : ''}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Players;
