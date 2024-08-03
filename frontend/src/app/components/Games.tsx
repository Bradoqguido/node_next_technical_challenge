import { useEffect, useState } from 'react';
import api from '../services/api';
import AddGameForm from "@/app/components/AddGameForm";

type Game = {
    id: number;
    date: string;
    min_players: number;
    created_by: string;
};

const Games = () => {
    const [games, setGames] = useState<Game[]>([]);

    const fetchGames = async () => {
        try {
            const response = await api.get('/games');
            setGames(response.data);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div>
            <h2>Games</h2>
            <AddGameForm onGameAdded={fetchGames} />
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        {game.date} - Min Players: {game.min_players} - Created By: {game.created_by}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Games;
