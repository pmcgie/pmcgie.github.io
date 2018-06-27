$(document).on("click", "#searchTrigger", collegeSearch);

function collegeSearch () {

    var Key = "NABLfNVpCSfFgOUyMYi1Z9mHLvuNgMbU1FPZudH5"

    var City = $("#CitySearch").val()
    var State = $("#StateSearch").val()
    var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools?school.city=" + City + "&school.state=" + State + "&api_key="+Key

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response)

        renderbuttons()

    //populate initial category buttons
    function renderbuttons() {

        //ensure nothing prior exists
        $("#CollegeList").empty();

        var searchlength = response.results.length
        var results = response.results
        searchlength = Math.min(30,searchlength);

        for (i=0;i<searchlength;i++) {
            //Pull category object info
            var school = results[i].school.name;
            var lat = results[i].location.lat;
            var lon = results[i].location.lon;

            //create button with attributes and text
            var schoolButton = $("<button>");
            schoolButton.addClass("school-btn");
            schoolButton.attr("position",i);
            schoolButton.attr("style","margin:5px;")
            schoolButton.attr("value",school);
            schoolButton.attr("lat",lat)
            schoolButton.attr("lon",lon)
            schoolButton.text(school);

            //Add category button
            $("#CollegeList").append(schoolButton);
        }

        /*for (i=0; i<categoriesList.length; i++) {

            //Pull category object info
            var category = categoriesList[i].init_Name;
            var categoryID = categoriesList[i].init_ID;

            //create button with attributes and text
                var categoryButton = $("<button>");
                categoryButton.addClass("cat-btn");
                categoryButton.attr("position",i);
                categoryButton.attr("value",categoryID);
                categoryButton.attr("style","margin:5px;")
                categoryButton.text(category);

                //Add category button
                $("#CollegeList").append(categoryButton);

        }*/
    }

    })
}
