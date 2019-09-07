$(function() {
    
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          name: $("#burger-label").val().trim(),
          devoured: false
        };
        console.log(newBurger.name);
        //Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger: " + newBurger);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});