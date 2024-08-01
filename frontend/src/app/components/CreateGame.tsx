import React, { useState } from 'react';
import axios from '../infraestructure/axiosConfig';

const CreateGame: React.FC = () => {
    const [date, setDate] = useState('');
    const [minPlayers, setMinPlayers] = useState(10);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/games/create', { date, minPlayers });
            alert('Jogo Criado');
        } catch (error) {
            alert('Error creating game');
        }
    };

    return (
        <div>
            <h2>Criar Jogo</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Dia do Jogo:
                    <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
                </label>
                <label>
                    Número mínimo de jogadores:
                    <input type="number" value={minPlayers} onChange={(e) => setMinPlayers(parseInt(e.target.value))} min="1" required />
                </label>
                <button type="submit">Crair jogo</button>
            </form>
        </div>
    );
};

export default CreateGame;
