// Load Data
var friendsData = require("../data/friends")

// Routing
module.exports = function(app) {
    app.get("/api/friends",function(req,res) {
        res.json(friendsData);
    })
}

// Handles when user submits form, will add the JSON to the array
app.post("/api/friends",function(req,res) {
    
})