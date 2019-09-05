var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

console.log("You've reached my router");
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log("This is the burger post route");
    console.log(req.body);
    burger.create(["burger_name"], [req.body.name], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      console.log("req.body.name = ", req.body.name);
      
    });
  });
  
/*router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        //some stuff goes here
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
});*/
  


module.exports = router;