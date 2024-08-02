import { useEffect, useState } from 'react';
import api from '../services/api';

type Team = {
    id: number;
    game_id: number;
    name: string;
};

const Teams = () => {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await api.get('/teams');
                setTeams(response.data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };

        fetchTeams();
    }, []);

    return (
        <div>
            <h2>Teams</h2>
            <ul>
                {teams.map(team => (
                    <li key={team.id}>
                        {team.name} (Game ID: {team.game_id})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Teams;
