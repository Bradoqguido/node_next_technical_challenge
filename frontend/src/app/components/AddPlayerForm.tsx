import { useState } from 'react';
import api from '../services/api';

type Props = {
    onPlayerAdded: () => void;
};

const AddPlayerForm: React.FC<Props> = ({ onPlayerAdded }) => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const [isGoalkeeper, setIsGoalkeeper] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/players', { name, level, is_goalkeeper: isGoalkeeper });
            onPlayerAdded();
            setName('');
            setLevel('');
            setIsGoalkeeper(false);
        } catch (error) {
            console.error('Error adding player:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Player</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Level:</label>
                <input
                    type="text"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Goalkeeper:</label>
                <input
                    type="checkbox"
                    checked={isGoalkeeper}
                    onChange={(e) => setIsGoalkeeper(e.target.checked)}
                />
            </div>
            <button type="submit">Add Player</button>
        </form>
    );
};

export default AddPlayerForm;
