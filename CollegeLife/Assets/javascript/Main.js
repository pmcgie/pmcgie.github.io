//Global Variables
var colleges = '4bf58dd8d48988d1ae941735';
var client_id = "EC4IKNOQF0EC2MA51QZHIR4LQ0PC0VK3MEW1WBEXXF02MYNI"
var client_secret = "KRNKDA5Z3SMXTLTLXTKZJ34OOH0YYGYF00UB02CMUQJ2V0GR"
var mainURL = "https://api.foursquare.com/v2/venues/search?near='"
var currentTime = moment(new Date(),'YYYYMMDD');

//Hide from open search
//This is for city and state search for colleges
$(document).on("click", "#searchTrigger", mapSearch);

function mapSearch() {

    var City = $("#CitySearch").val()
    var State = $("#StateSearch").val()

    //Update Location Search
    $('#locationSearch').val('Colleges Near ' + City + ', ' + State);

}

//Create on clicks for main data pulls
$(document).on("click", ".school-btn", schoolSearch);
$(document).on("click", ".cat-btn", categorySearch);
$(document).on("click", ".sub-cat-btn", categorySearch);

//Run main process
function schoolSearch() {

    var school = $(this).attr("value")
    var lat = $(this).attr("lat")
    var lon = $(this).attr("lon")
    var category = $("#CategorySelected").attr("value")

    //Update HTML
    $("#CollegeSelected").empty()
    $("#CollegeSelected").attr("value",school)
    $("#CollegeSelected").append("School Currently Selected: " + school)
    $("#CollegeSelected").attr("lat",lat)
    $("#CollegeSelected").attr("lon",lon)
            
    //Update Location Search
    if (category === "None") {
        $('#locationSearch').val(school);
    } else {
        $('#locationSearch').val(category + " near " + school);
    }

    UpdateStats()
}

//Run main process
function categorySearch() {

    var category = $(this).attr("name")
    var categoryID = $(this).attr("value")
    var school = $("#CollegeSelected").attr("value")

    //Update HTML
    $("#CategorySelected").empty()
    $("#CategorySelected").attr("value",category)
    $("#CategorySelected").attr("fq",categoryID)
    $("#CategorySelected").append("Category Currently Selected: " + category)

    //Update Location Search
    if (school === "None") {
        $('#locationSearch').val(category);
    } else {
        $('#locationSearch').val(category + " near " + school);
    }

    UpdateStats()
}

function UpdateStats() {

    //Set up search variables for API
    var lat = $("#CollegeSelected").attr("lat") 
    var lon = $("#CollegeSelected").attr("lon")
    var ll = lat + "," + lon
    var school = $("#CollegeSelected").attr("value")
    var category = $("#CategorySelected").attr("value")
    var categoryID = $("#CategorySelected").attr("fq")
    var dateVal = moment(Date.now()).format('YYYYMMDD')

    console.log(dateVal)
    console.log(ll)

    //API ID & Secret for Foursquare
    var client_id = "EC4IKNOQF0EC2MA51QZHIR4LQ0PC0VK3MEW1WBEXXF02MYNI"
    var client_secret = "KRNKDA5Z3SMXTLTLXTKZJ34OOH0YYGYF00UB02CMUQJ2V0GR"

    //API for Colleges
    var Key = "NABLfNVpCSfFgOUyMYi1Z9mHLvuNgMbU1FPZudH5"

    //College URL for website Link
    var schoolURL = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=" + school + "&api_key="+ Key

    //Category URL for website Link
    var catURL = "https://api.foursquare.com/v2/venues/search?ll=" + ll +"&categoryId="+ categoryID + "&client_id=" + client_id + "&client_secret="+client_secret+"&v=" + dateVal

        $.ajax({
            url: catURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            //List venues
            var results = response.response.venues

            $("#FunStats").empty()

            for (i=0;results.length;i++) {

                var venue = results[i].name
                var lat = results[i].location.lat
                var lon = results[i].location.lat


                var venueButton = $("<button>");
                venueButton.addClass("venue-btn");
                venueButton.attr("position",i);
                venueButton.attr("style","margin:5px;")
                venueButton.attr("value",venue);
                venueButton.attr("lat",lat)
                venueButton.attr("lon",lon)
                venueButton.text(venue);


                $("#FunStats").append(venueButton)
            }

        });

        $.ajax({
            url: schoolURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            //get data for college
            var results = response.results[0]
            var url = results.school.school_url

            //Append School Information to CollegeStats
            $("#CollegeStats").empty()
            $("#CollegeStats").append("<div>Website: &nbsp</div><a href='https://" + url + "' target='_blank'>Click Here to Visit Webpage</a>")

        });


//
$(document).on("click", ".venue-btn", venuePic);

function venuePic() {

        var venueName = $(this).attr("value")
        var City = $("#CitySearch").val()
        var State = $("#StateSearch").val()

        $('#locationSearch').val(venueName);
        
        var venueURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + City +","+ State + " " + venueName + "&inputtype=textquery&fields=photo&key=AIzaSyA3XJDLX5SHurtiT0ceXGR6AWwerQv1Mws"
        var queryURL = "https://cors-anywhere.herokuapp.com/" + venueURL

 

        $.ajax({
          url: queryURL,
          method: "GET",
          dataType: "json",

          // this headers section is necessary for CORS-anywhere

          headers: {
            "x-requested-with": "xhr",
          }

        }).done(function(response) {

          var photoRef = response.candidates[0].photos[0].photo_reference
          var photoURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoRef +"&key=AIzaSyA3XJDLX5SHurtiT0ceXGR6AWwerQv1Mws"

          $("#Photos").empty();
          $("#Photos").append("<img src='" + photoURL +"'height=300px width=500px>");
 

        }).fail(function(jqXHR, textStatus) {

          console.error(textStatus)

        }) 
    }

}