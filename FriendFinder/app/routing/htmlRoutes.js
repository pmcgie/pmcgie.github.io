// Dependencies
var path = require("path");

// ROUTING
module.exports = function(app) {

    // Routes to Survey Page
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname,"../../app/public/survey.html"));
    })

    // Routes to Home Page
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../../app/public/home.html"))
    })

}


