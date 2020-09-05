-- Connect to database in PSQL terminal
-- \c database_name
-- Show tables in the database connected
-- \dt

DROP DATABASE mount_recorder;
CREATE DATABASE mount_recorder;

DROP TABLE IF EXISTS user_mounts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS mounts;
DROP TABLE IF EXISTS admin_users;

CREATE TABLE mounts (
	mount_id SERIAL PRIMARY KEY,
    mount_name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
    username VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE user_mounts (
	user_id INT,
	mount_id INT,
    CONSTRAINT pk_user_mount UNIQUE(user_id, mount_id),
	CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id),
	CONSTRAINT fk_mount FOREIGN KEY(mount_id) REFERENCES mounts(mount_id)
);

CREATE TABLE admin_users (
	user_id SERIAL PRIMARY KEY,
    username VARCHAR(200) NOT NULL UNIQUE,
	hashed_password VARCHAR(200) NOT NULL 
);

INSERT INTO mounts (mount_name) VALUES ('Nightmare'), ('Garuda'), ('Titan'), ('Ifrit'), ('Leviathan'), ('Ramuh'), ('Shiva'),
									   ('Bismarck'), ('Ravana'), ('Thordan'), ('Nidhogg'), ('Sephirot'), ('Sophia'), ('Zurvan'),
									   ('Susano'), ('Lakshmi'), ('Shinryu'), ('Tsukuyomi'), ('Byakko'), ('Suzaku'), ('Seiryu'),
									   ('Titania'), ('Innocence'), ('Hades'), ('Ruby Weapon'), ('Seat of Sacrifice'),
									   ('A4S'), ('A12S'), ('O4S'), ('O8S'),('O12S'), ('E4S'), ('E8S'),
									   ('Rathalos'), ('Incitatus (Faux Hollows)');
INSERT INTO users (username) VALUES ('Sol Faye');
INSERT INTO user_mounts (user_id, mount_id) VALUES (1, 1);

SELECT * FROM mounts;
SELECT * FROM users;
SELECT * FROM user_mounts;

SELECT u.user_id, u.username, m.mount_id, m.mount_name, u.user_id = um.user_id AS owned
FROM users u
CROSS JOIN mounts m
LEFT JOIN user_mounts um
	ON u.user_id = um.user_id AND m.mount_id = um.mount_id;