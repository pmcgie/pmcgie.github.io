//Setting up Category Variables and search criteria
var categoriesList = [

    {init_Name: "Arts & Entertainment",
        init_ID:'4d4b7104d754a06370d81259',
        secondary: 
            {
                secNames: ['Comedy Club', 'General Entertainment','Movie Theater','Music Venue','Performing Arts',
                            'Stadium', 'Museum', 'Public Art'],
                sec_ID: ['4bf58dd8d48988d18e941735','4bf58dd8d48988d1f1931735','4bf58dd8d48988d17f941735','4bf58dd8d48988d1e5931735',
                            '4bf58dd8d48988d1f2931735','4bf58dd8d48988d184941735','4bf58dd8d48988d181941735','507c8c4091d498d9fc8c67a9']
            }
    },

    {init_Name: "Food",
        init_ID: '4d4b7105d754a06374d81259',
        secondary:
            {
                secNames: ['American','Asian','Fast Food','Pizza','Indian','Italian','Middle East','Latin American','Greek'],
                sec_ID: ['4bf58dd8d48988d14e941735','4bf58dd8d48988d142941735','4bf58dd8d48988d16e941735','4bf58dd8d48988d1ca941735','4bf58dd8d48988d10f941735',
                            '4bf58dd8d48988d110941735','4bf58dd8d48988d115941735','4bf58dd8d48988d1be941735','4bf58dd8d48988d10e941735']
            }
    },

    {init_Name: "Nightlife",
        init_ID: '4d4b7105d754a06376d81259',
        secondary:
            {
                secNames: ['Bar','Brewery','Lounge','NightClub'],
                sec_ID: ['4bf58dd8d48988d116941735','50327c8591d4c4b30a586d5d','4bf58dd8d48988d121941735','4bf58dd8d48988d11f941735']
            }
    },

    {init_Name: "Outdoors & Recreation",
        init_ID: '4d4b7105d754a06377d81259',
        secondary:
            {
                secNames:['Athletics & Sports','Beaches','Bike Trails','Campgrounds','Skiing','Lakes'],
                sec_ID:['4f4528bc4b90abdf24c9de85','4bf58dd8d48988d1e2941735','56aa371be4b08b9a8d57355e','4bf58dd8d48988d1e4941735',
                        '4bf58dd8d48988d1e9941735','4bf58dd8d48988d161941735']
            }
    },

    {init_Name: "Travel & Transport",
        init_ID: '4d4b7105d754a06379d81259',
        secondary:
            {
                secNames: ['Bike','Bus','LightRail','Metro','Train'],
                sec_ID: ['4e4c9077bd41f78e849722f9','4bf58dd8d48988d1fe931735','4bf58dd8d48988d1fc931735','4bf58dd8d48988d1fd931735','4bf58dd8d48988d129951735']
            }
    }
]

//populate initial category buttons
function renderbuttons() {

    //ensure nothing prior exists
    $("#categoryButtons").empty();

    for (i=0; i<categoriesList.length; i++) {

        //Pull category object info
        var category = categoriesList[i].init_Name;
        var categoryID = categoriesList[i].init_ID;

        //create button with attributes and text
            var categoryButton = $("<button>");
            categoryButton.addClass("cat-btn");
            categoryButton.attr("position",i);
            categoryButton.attr("value",categoryID);
            categoryButton.attr("name",category);
            categoryButton.attr("style","margin:5px;")
            categoryButton.text(category);

            //Add category button
            $("#categoryButtons").append(categoryButton);

    }
}

//Populate Sub-categories
function subCategories() {

    //ensure nothing prior exists
    $("#secondaryButtons").empty();

    //sub category information
    var positionVal = $(this).attr("position");
    var subcatLength = categoriesList[positionVal].secondary.secNames.length;
    var subcatName = categoriesList[positionVal].secondary.secNames;
    var subcatID = categoriesList[positionVal].secondary.sec_ID;

    for (i=0;i<subcatLength;i++) {
        var subcatButton = $("<button>");
        subcatButton.addClass("sub-cat-btn");
        subcatButton.attr("position",i);
        subcatButton.attr("value",subcatID[i]);
        subcatButton.attr("name",subcatName[i])
        subcatButton.attr("style","margin:5px;");
        subcatButton.text(subcatName[i]);

        //Add category button
        $("#secondaryButtons").append(subcatButton);

    }

}

// Calling the renderButtons function to display the intial buttons
renderbuttons();

//ensures button functionality
$(document).on("click", ".cat-btn", subCategories);
