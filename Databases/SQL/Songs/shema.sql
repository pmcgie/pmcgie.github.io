DROP DATABASE IF EXISTS Music_DB;
CREATE DATABASE Music_DB;
USE Music_DB;

CREATE TABLE topSongs(
    ranking INTEGER(10) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    songYear INT NOT NULL,
    raw_total DECIMAL(10,3) NOT NULL,
    raw_usa DECIMAL(10,3) NOT NULL,
    raw_uk DECIMAL(10,3) NOT NULL,
    raw_Eur DECIMAL(10,3) NOT NULL,
    raw_Rest DECIMAL(10,3) NOT NULL,
    PRIMARY KEY (ranking)
);


CREATE TABLE topAlbums(
    ranking INTEGER(10) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    albumYear INT NOT NULL,
    raw_total DECIMAL(10,3) NOT NULL,
    raw_usa DECIMAL(10,3) NOT NULL,
    raw_uk DECIMAL(10,3) NOT NULL,
    raw_Eur DECIMAL(10,3) NOT NULL,
    raw_Rest DECIMAL(10,3) NOT NULL,
    PRIMARY KEY (ranking)
)
