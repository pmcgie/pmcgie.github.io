* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?

	  Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

	  A promise is an object that may produce a single value some time in the future.

	  ORM Library

  	- Answer: What advantages does it offer?
	  1. Good for testing
	  2. Sequelize supports a variety of database engines such as PostgreSQL, MySQL, Microsoft SQL server, sQlite and MariaDB.
	  3. Sequelize also supports migrations, which is like a version control for your database

  	- Answer: How do I install it? How do I incorporate it into my app?
	  Install: NPM install sequelize
	  Incorporate into App: Here is one example - https://scotch.io/tutorials/creating-an-angularjs-application-with-sequelize-part-1

  	- Answer: What the heck is a Sequelize model? What role will it play?
	  Representation of table

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
		  const User = sequelize.define('tableName', {
			Country: {
				type: Sequelize.STRING
			},
			PhoneCode: {
				type: Sequelize.INTEGER
			},
			Capital: {
				type: Sequelize.STRING
			},
			IndependenceYear: {
				type: Sequelize.INTEGER
			},
		  	},
			{
				freezeTableName: true
			}
			});

  		- How would I query for all the records where the Independence Year was less than 50 years ago?
		  tableName.findAll({
			  where: {
				  IndependenceYear: { $gt: new Date().getFullYear() - 50}
			  }
		  })

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
