DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top_albums (
  id INT NOT NULL auto_increment,
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE top_songs (
  id INT NOT NULL auto_increment,
  album_id INT NOT NULL,
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year_released INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (id),
      FOREIGN KEY (album_id) REFERENCES top_albums(id)
);

INSERT into top_albums (position, album) values (1, 'Purple Rain');

INSERT into top_songs (album_id, position, artist, song) values (1, 5, 'Prince' ,'Lets go crazy');

SELECT * FROM top_songs;
select * from top_albums;



SELECT *
FROM top_albums 
INNER JOIN top_songs 
ON (top_albums.id = top_songs.album_id ) 
WHERE (top_songs.artist = 'Prince') 
ORDER BY top_albums.year;