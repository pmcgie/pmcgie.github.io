--It is time to add some data into FavoriteDB! The data that you add should be unique to you and you should try to test your skills in not only adding new data, but also attempt to update old data as well!

--Try to add at least three rows of data to each table.

--BONUS: Look into how you you might go about creating a column that can hold a default value within it and how default values work when creating new rows.

--BONUS: Look into how you might go about creating a column with a default value that automatically go up with each new row

--BONUS: Look into the concept of making a column the “primary key”

--ULTRA BONUS: Try to create a column called “id” in one of your tables that can contain an integer, is the primary key for the table, cannot be NULL, and automatically increments with each new row added.--


-- Insert value into favorite food
INSERT INTO favorite_foods(food,score)
VALUES("Fish Sticks",4);


-- Insert value into favorite movies
INSERT INTO favorite_movies(movie,five_times,score)
VALUES("Shrek",false,10);

--Insert value into favorite songs
INSERT INTO favorite_songs(song,artist,score)
VALUES("Wonderwall","Oasis",9);

--Create a column that can hold a default value w/in it and how default values work when creating new rows.
ALTER TABLE favorite_foods
ADD lastAte date;


--Instructions

--Make a new database called “programming_db” and switch into it for this activity
CREATE DATABASE programming_db;

--Create a table called “programming_languages” which includes a primary key named “id” which will automatically increment which each new row created, a string column called “languages,” and a numeric column called “rating.”
CREATE TABLE programming_languages (
	ID INTEGER NOT NULL AUTO_INCREMENT,
    languages VARCHAR(100) NOT null,
    rating INTEGER(10),
    mastered BOOLEAN default TRUE,
    primary key (id)
);

--Insert some data into the table and then modify the data using the id column.
INSERT INTO programming_languages(languages,rating)
VALUES("Java",7);

INSERT INTO programming_languages(languages,rating)
VALUES("Python",9);

--BONUS: Study up on how to add columns to a table and then create a boolean column called “mastered” which has a default value of true.

--BONUS: Start looking into the concept of joins in SQL

--Joins

