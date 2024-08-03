import { useEffect, useState } from 'react';
import api from '../services/api';
import AddTeamForm from "@/app/components/AddTeamForm";

type Team = {
    id: number;
    game_id: number;
    name: string;
};

const GameTeams = () => {
    const [teams, setTeams] = useState<Team[]>([]);

    const fetchTeams = async () => {
        try {
            const response = await api.get('/teams');
            setTeams(response.data);
        } catch (error) {
            console.error('Error fetching teams:', error);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    return (
        <div>
            <h2>Teams</h2>
            <AddTeamForm onTeamAdded={fetchTeams} />
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

export default GameTeams;
