-- schema.sql
CREATE TABLE players (
                         id SERIAL PRIMARY KEY,
                         name VARCHAR(255) NOT NULL,
                         level INT NOT NULL,
                         is_goalkeeper BOOLEAN NOT NULL
);

CREATE TABLE games (
                       id SERIAL PRIMARY KEY,
                       date TIMESTAMP NOT NULL,
                       min_players INT NOT NULL,
                       created_by VARCHAR(255) NOT NULL
);

CREATE TABLE teams (
                       id SERIAL PRIMARY KEY,
                       game_id INT REFERENCES games(id),
                       name VARCHAR(255) NOT NULL
);

CREATE TABLE game_confirmations (
                                    game_id INT REFERENCES games(id),
                                    player_id INT REFERENCES players(id)
);

CREATE TABLE team_players (
                              team_id INT REFERENCES teams(id),
                              player_id INT REFERENCES players(id)
);
