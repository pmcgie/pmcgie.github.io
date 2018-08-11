// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Create a "Book" model with the following configuration
var Book = sequelize.define("book", {

    // 1. A title property of type STRING
    title: Sequelize.STRING,

    // 2. An author property of type STRING
    author: Sequelize.STRING,

    // 3. A genre property of type STRING
    genre: Sequelize.STRING,

    // 4. A pages property of type INTEGER
    pageNum: Sequelize.INTEGER

});

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;
