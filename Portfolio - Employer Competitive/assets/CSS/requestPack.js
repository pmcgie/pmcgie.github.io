var request = require("request")

request("https://en.wikipedia.org/wiki/Kudos_(granola_bar)"),function(error,response,data) {
    if(!error && response.statusCode === 200) {
        console.log(data);
    }
}