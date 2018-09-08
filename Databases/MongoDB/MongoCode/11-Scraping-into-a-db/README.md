# Scraping into a DB

## Instructions

* Using the tools and techniques you learned so far,
you will scrape a website of your choice, then place the data
in a MongoDB database. Be sure to make the database and collection
before running this exercise.

### Hints

* Consult the assignment files from earlier in the class if you need a refresher on Cheerio.

Will have the two routes they need to make spec'd out in the right spot of server.js:

## Route 1
This route will retrieve all of the data
from the scrapedData collection as json (this will be populated
by the data you scrape using the next route)

## Route 2
When you visit this route, the server will
scrape data from the site of your choice, and save it to
MongoDB.
TIP: Think back to how you pushed website data
into an empty array in the last class. How do you
push it into a MongoDB collection instead?