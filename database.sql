CREATE DATABASE mount_recorder;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(200) NOT NULL
);

CREATE TABLE mounts(
    mount_id SERIAL PRIMARY KEY,
    mount_name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE user_mounts(
    user_id INT,
    mount_id INT,
    owned BIT,
    CONSTRAINT pk_user_mount PRIMARY KEY(user_id, mount_id),
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id),
    CONSTRAINT fk_mount FOREIGN KEY(mount_id) REFERENCES mounts(mount_id)
);