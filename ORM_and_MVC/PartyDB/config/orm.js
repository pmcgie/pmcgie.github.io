var connection = require("./connection.js");

var orm = {
    select: function(whatToSelect, tableInput,cb) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
        if (err) throw err;
        //console.log(result);
        //call function
        cb(result);
      });
    },
    selectWhere: function(tableInput, colToSearch, valOfCol,cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          //console.log(result);
          //callback function
          cb(result)
        });
    },
  };
  
  module.exports = orm;
