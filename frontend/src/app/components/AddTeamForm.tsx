import { useState } from 'react';
import api from '../services/api';

type Props = {
    onTeamAdded: () => void;
};

const AddTeamForm: React.FC<Props> = ({ onTeamAdded }) => {
    const [gameId, setGameId] = useState(0);
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/teams', { game_id: gameId, name });
            onTeamAdded();
            setGameId(0);
            setName('');
        } catch (error) {
            console.error('Error adding team:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Team</h2>
            <div>
                <label>Game ID:</label>
                <input
                    type="number"
                    value={gameId}
                    onChange={(e) => setGameId(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Team</button>
        </form>
    );
};

export default AddTeamForm;
