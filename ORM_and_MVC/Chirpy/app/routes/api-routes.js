// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var express = require("express");
var router = express.Router();

// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps - STEP ONE!!!
  app.get("/api/all",function(req,res) {
    var dbQuery = "SELECT * FROM chirps";

    connection.query(dbQuery,function(err,result) {
      if (err) throw err;
      res.json(result);
    })
  })

  // Add a chirp
  app.post("/api/new",function(req,res) {
    
  })

};
