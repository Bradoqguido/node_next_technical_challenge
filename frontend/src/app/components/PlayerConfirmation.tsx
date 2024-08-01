// components/PlayerConfirmation.tsx
import React, { useState, useEffect } from 'react';
import axios from '../infraestructure/axiosConfig';

interface PlayerConfirmationProps {
    gameId: string;
}

const PlayerConfirmation: React.FC<PlayerConfirmationProps> = ({ gameId }) => {
    const [confirmed, setConfirmed] = useState(false);

    useEffect(() => {
        const checkConfirmation = async () => {
            try {
                const { data } = await axios.get(`/api/confirmations/status/${gameId}`);
                setConfirmed(data.confirmedPlayers >= data.minPlayers);
            } catch (error) {
                console.error(error);
            }
        };
        checkConfirmation();
    }, [gameId]);

    const handleConfirm = async () => {
        try {
            await axios.post('/api/confirmations/confirm', { gameId });
            setConfirmed(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleConfirm} disabled={confirmed}>
                {confirmed ? 'Confirmed' : 'Confirm Participation'}
            </button>
        </div>
    );
};

export default PlayerConfirmation;
