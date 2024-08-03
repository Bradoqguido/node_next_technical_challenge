import { useState } from 'react';
import api from '../services/api';

type Props = {
    onGameAdded: () => void;
};

const AddGameForm: React.FC<Props> = ({ onGameAdded }) => {
    const [date, setDate] = useState('');
    const [minPlayers, setMinPlayers] = useState(0);
    const [createdBy, setCreatedBy] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/games', { date, min_players: minPlayers, created_by: createdBy });
            onGameAdded();
            setDate('');
            setMinPlayers(0);
            setCreatedBy('');
        } catch (error) {
            console.error('Error adding game:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Game</h2>
            <div>
                <label>Date:</label>
                <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Min Players:</label>
                <input
                    type="number"
                    value={minPlayers}
                    onChange={(e) => setMinPlayers(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Created By:</label>
                <input
                    type="text"
                    value={createdBy}
                    onChange={(e) => setCreatedBy(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Game</button>
        </form>
    );
};

export default AddGameForm;
