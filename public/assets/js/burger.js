$(function() {
    //Add a new burger
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
      //Devour a burger
      $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        
        var eaten = {
            devoured: true
        };
    
        console.log("ID = " + id);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: eaten
        }).then(
          function() {
            console.log("changed burger #" + id + " devoured to true");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      })
});