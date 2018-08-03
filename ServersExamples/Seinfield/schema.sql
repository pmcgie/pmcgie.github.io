DROP DATABASE seinfield_db;

CREATE DATABASE seinfield_db;
USE seinfield_db;

CREATE TABLE characters (
    id INT AUTO_INCREMENT,
    ch_name VARCHAR(100) NOT NULL,
    Coolness INTEGER(30) NOT NULL,
    Attitude VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO characters (ch_name,Coolness,Attitude) VALUES ("Kramer",10,"Crazy");
INSERT INTO characters (ch_name,Coolness,Attitude) VALUES ("Seinfield",7,"Goofy");
INSERT INTO characters (ch_name,Coolness,Attitude) VALUES ("Elaine",8,"Sociable");
INSERT INTO characters (ch_name,Coolness,Attitude) VALUES ("George",5,"Nerdy");