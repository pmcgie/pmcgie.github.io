var orm = require("./config/orm.js");

// Select Party Names
orm.select("party_name","parties")

// Select Client Names
orm.select("client_name","clients")

// All Parties where type is grown-up
orm.selectWhere("party_name","parties","grown-up")
