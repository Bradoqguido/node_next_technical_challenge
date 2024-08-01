import React, { useState } from 'react';
import axios from '../infraestructure/axiosConfig';

interface TeamManagementProps {
    gameId: string;
}

const TeamManagement: React.FC<TeamManagementProps> = ({ gameId }) => {
    const [teamName, setTeamName] = useState('');
    const [playerId, setPlayerId] = useState('');
    const [teamId, setTeamId] = useState('');

    const createTeam = async () => {
        try {
            const { data } = await axios.post('/api/teams/create', { gameId, teamName });
            setTeamId(data.id);
        } catch (error) {
            console.error(error);
        }
    };

    const addPlayerToTeam = async () => {
        try {
            await axios.post('/api/teams/addPlayer', { playerId, teamId });
            alert('Jogador Adicionado no Time');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Time</h3>
            <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Nome do time"
            />
            <button onClick={createTeam}>Criar Time</button>

            <h3>Add Player to Team</h3>
            <input
                type="text"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
                placeholder="ID do jogador"
            />
            <button onClick={addPlayerToTeam}>Adicionar Jogador</button>
        </div>
    );
};

export default TeamManagement;
