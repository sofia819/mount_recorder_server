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

INSERT INTO mounts (mount_name, expansion, image_url) VALUES 
('A4S', 3, 'https://i.imgur.com/6dUMsOl.png'),
('Bismarck', 3, 'https://i.imgur.com/ZvhQez9.png'),
('Byakko', 4, 'https://i.imgur.com/eeRA9JC.png'),
('E12S', 5, 'https://i.imgur.com/KQkwdv2.png'),
('E4S', 5, 'https://i.imgur.com/FQqj624.png'),
('E8S', 5, 'https://i.imgur.com/xfxnX7n.png'),
('Emerald Weapon', 5, 'https://i.imgur.com/LRpHIGT.png'),
('Garuda', 2, 'https://i.imgur.com/XvEPvxU.png'),
('Hades', 5, 'https://i.imgur.com/J1bhaAT.png'),
('Ifrit', 2, 'https://i.imgur.com/6Edepkw.png'),
('Innocence', 5, 'https://i.imgur.com/PPtDF8l.png'),
('Lakshmi', 4, 'https://i.imgur.com/LK6K5Id.png'),
('Leviathan', 2, 'https://i.imgur.com/w44BOQu.png'),
('Nidhogg', 3, 'https://i.imgur.com/yWyWFf5.png'),
('Nightmare', 2, 'https://i.imgur.com/CND6Wgo.png'),
('A12S', 3, 'https://i.imgur.com/hFBBmFn.png'),
('O12S', 4, 'https://i.imgur.com/bMNz9JF.png'),
('O4S', 4, 'https://i.imgur.com/E83ISh2.png'),
('O8S', 4, 'https://i.imgur.com/h9zpjvM.png'),
('Ramuh', 2, 'https://i.imgur.com/Tsb8Ykx.png'),
('Rathalos', 0, 'https://i.imgur.com/2D14ixp.png'),
('Ravana', 3, 'https://i.imgur.com/uQY5sy7.png'),
('Ruby Weapon', 5, 'https://i.imgur.com/LMtXGXQ.png'),
('Seiryu', 4, 'https://i.imgur.com/vllxdby.png'),
('Sephirot', 3, 'https://i.imgur.com/uAHn1LF.png'),
('Shinryu', 4, 'https://i.imgur.com/bjVPV9P.png'),
('Shiva', 2, 'https://i.imgur.com/3aY0B6W.png'),
('Sophia', 3, 'https://i.imgur.com/TxNnXp7.png'),
('Susano', 4, 'https://i.imgur.com/EBdfDXC.png'),
('Suzaku', 4, 'https://i.imgur.com/D8w4U2I.png'),
('Thordan', 3, 'https://i.imgur.com/DMI22Ve.png'),
('Titan', 2, 'https://i.imgur.com/SHXnhbD.png'),
('Titania', 5, 'https://i.imgur.com/lquVxpm.png'),
('Tsukuyomi', 4, 'https://i.imgur.com/ueO5V9T.png'),
('Warrior of Light', 5, 'https://i.imgur.com/iEh5MWb.png'),
('Zurvan', 3, 'https://i.imgur.com/3GD0xoa.png'),
('Diamond Weapon', 5, 'https://i.imgur.com/WnJtugj.jpg');

INSERT INTO users (username) VALUES
	('Albel Noxs'), ('Artemis Locke'), ('Caedryn Leon'), ('Coulier Armnai'), ('Ellivrid Merlain'),
	('Hida Silverlight'), ('Koh''a Relanah'), ('LenZ Chu'), ('Lu Anna'), ('Moonsnow Leon'),
	('Morgana Raha'), ('Procene Camilleri'), ('Raven Foxshroud'), ('Rheon Sunh'), ('Sol Faye'),
	('Sora Hoshi'), ('Trinity Bajhiri'), ('Garrth Karsch');
INSERT INTO user_mounts (user_id, mount_id) VALUES (1, 1), (2, 2), (3, 3);

SELECT * FROM mounts;
SELECT * FROM users;
SELECT * FROM user_mounts;

SELECT u.user_id, u.username, m.mount_id, m.mount_name, u.user_id = um.user_id AS owned
FROM users u
CROSS JOIN mounts m
LEFT JOIN user_mounts um
	ON u.user_id = um.user_id AND m.mount_id = um.mount_id;

SELECT u.user_id, u.username, m.mount_id, m.mount_name, m.expansion, u.user_id = um.user_id AS owned
    FROM users u
    CROSS JOIN mounts m
    LEFT JOIN user_mounts um
    ON u.user_id = um.user_id AND m.mount_id = um.mount_id
WHERE m.mount_id = 1;
