$(document).ready(function() {

    // Triggers Action to Devour the Burger
    $(".devourForm").on("click", function(event) {

        event.preventDefault();

        var id = $(this).data("id");
        var objColVals = {devoured: true};

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: objColVals
        }).then(
            function() {
            }
            
        );

        location.reload();

    });

    // Triggers Action to Create New Burger
    $(".newburgForm").on("click", function(event) {

        event.preventDefault();

        var newBurger = {burger_name: $("#burg").val().trim()};

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        );
    })

})