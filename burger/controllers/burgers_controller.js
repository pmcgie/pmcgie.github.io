var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/api/burgers",function(req,res) {
    burger.create([
        "burger_name","devoured"
    ],[
        req.body.name,false
    ], function() {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id",function(req,res){

    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

router.delete("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;

    burger.delete(condition, function() {
        res.redirect("/");
    });
});

module.exports = router;
