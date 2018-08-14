var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Grabs all burger data
router.get("/", function(req,res) {
    burger.all(function(data) {

        var hbsObject = {burgers: data};
        res.render("index",hbsObject);

    });
});

// Creates a new burger object
router.post("/api/burgers",function(req,res) {
    burger.create(["burger_name"],[req.body.burger_name], function() {
        res.redirect("/");
    });

});

// Updates burger to Devoured
router.put("/api/burgers/:id",function(req,res){

    var condition = "id = " + req.params.id;

    burger.update({devoured: req.body.devoured}, condition, function() {
        res.redirect("/");
    });

});

// Removes Burger Entry
router.delete("/api/burgers/:id", function(req,res){
    
    var condition = "id = " + req.params.id;

    burger.delete(condition, function() {
        res.redirect("/");
    });

});

module.exports = router;
