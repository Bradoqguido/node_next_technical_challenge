export interface Game {
    id: string;
    date: string;
    minPlayers: number;
}

export interface Player {
    id: string;
    name: string;
    level: number;
    isGoalkeeper: boolean;
}
