var client_id = "EC4IKNOQF0EC2MA51QZHIR4LQ0PC0VK3MEW1WBEXXF02MYNI"
var client_secret = "KRNKDA5Z3SMXTLTLXTKZJ34OOH0YYGYF00UB02CMUQJ2V0GR"

queryURL = "https://api.foursquare.com/v2/venues/search?near='St Paul'&categoryId=5267e4d9e4b0ec79466e48d1&client_id=" + client_id + "&client_secret="+client_secret+"&v=20180622"

//queryURL = "https://api.foursquare.com/v2/venues/categories?near='St Paul'&client_id=" + client_id + "&client_secret="+client_secret+"&v=20180622"//

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    //var result = response.response.categories[2]
    //console.log(result)
});