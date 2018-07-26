-- Insert a single song into the rankings...can use import function in SQL though
INSERT INTO songsranking (ranking, artist, title,songYear,raw_total,raw_usa,raw_uk,raw_Eur,raw_Rest)
VALUES (1, 'Bing Crosby','White Christmas',1942,39.903,23.929,5.7,2.185,0.54);


-- Your assignment is to take these two large sets of data and come up with a method to join them together in order to figure out if a given artist’s song and album made it into the charts at the time of their release.
SELECT topsongs.artist, topsongs.title, topalbums.title, topalbums.albumYear
FROM topsongs
INNER JOIN topalbums ON topsongs.artist = topalbums.artist;


-- HINT: This can be done in a couple different ways using external data as well, but you do have all of the data you need within your database to find the correlations. Give your methods some though before having to rely upon external info.

-- HINT: Remember that MySQL has the ability to combine two or more tables together so long as they share equivalent data. What data is similar between the two lists?

-- Once you have managed to successfully bring the two datasets together, start making queries like those you made earlier to this new table as well.

