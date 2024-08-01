import React, { useState } from 'react';
import axios from '../infraestructure/axiosConfig';

const RegisterPlayer: React.FC = () => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState(1);
    const [isGoalkeeper, setIsGoalkeeper] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/players/register', { name, level, isGoalkeeper });
            alert('Jogador Registrado!');
        } catch (error) {
            alert('Error registering player');
        }
    };

    return (
        <div>
            <h2>Registro de jogadores</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Nível de habilidade:
                    <input type="number" value={level} onChange={(e) => setLevel(parseInt(e.target.value))} min="1" max="5" required />
                </label>
                <label>
                    É Goleiro?
                    <input type="checkbox" checked={isGoalkeeper} onChange={(e) => setIsGoalkeeper(e.target.checked)} />
                </label>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default RegisterPlayer;
