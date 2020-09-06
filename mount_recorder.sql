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
    mount_name VARCHAR(200) NOT NULL UNIQUE,
	expansion INT NOT NULL
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

INSERT INTO mounts (mount_name, expansion) VALUES
	('Nightmare', 2), ('Garuda', 2), ('Titan', 2), ('Ifrit', 2), ('Leviathan', 2), ('Ramuh', 2), ('Shiva', 2),
	('Bismarck', 3), ('Ravana', 3), ('Thordan', 3), ('Nidhogg', 3), ('Sephirot', 3), ('Sophia', 3), ('Zurvan', 3),
	('Susano', 4), ('Lakshmi', 4), ('Shinryu', 4), ('Tsukuyomi', 4), ('Byakko', 4), ('Suzaku', 4), ('Seiryu', 4),
	('Titania', 5), ('Innocence', 5), ('Hades', 5), ('Ruby Weapon', 5), ('Warrior of Light', 5),
	('A4S', 3), ('A12S', 3), ('O4S', 4), ('O8S', 4),('O12S', 4), ('E4S', 5), ('E8S', 5),
	('Rathalos', 0), ('Faux Hollows', 0);
INSERT INTO users (username) VALUES ('Sol Faye'), ('Raven Foxshroud'), ('Caedryn Leon');
INSERT INTO user_mounts (user_id, mount_id) VALUES (1, 1), (2, 2), (3, 3);

SELECT * FROM mounts;
SELECT * FROM users;
SELECT * FROM user_mounts;

SELECT u.user_id, u.username, m.mount_id, m.mount_name, u.user_id = um.user_id AS owned
FROM users u
CROSS JOIN mounts m
LEFT JOIN user_mounts um
	ON u.user_id = um.user_id AND m.mount_id = um.mount_id;