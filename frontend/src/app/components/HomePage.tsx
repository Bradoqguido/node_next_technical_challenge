"use client";
import React, { useState, useEffect } from 'react';
import axios from '../infraestructure/axiosConfig';
import Link from 'next/link';
import { Game } from '../types';

const HomePage: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('/api/games');
                setGames(response.data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/register-player">
                <a>Register Player</a>
            </Link>
            <Link href="/create-game">
                <a>Create Game</a>
            </Link>
            <h2>Jogos Futuros</h2>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link href={`/game/${game.id}`}>
                            <a>
                                {new Date(game.date).toLocaleString()} - Número mínimo de jogadores: {game.minPlayers}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
