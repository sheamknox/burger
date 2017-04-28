var express = require("express");
var router = express.Router();

// Import burger.js to use its db methods
var burger = require("../models/burger.js");



// Create routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  console.log(req.body.name);
  
  burger.create([
    "burger_name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log(req.body.eaten);

  burger.update({
    devoured: req.body.eaten
  }, condition, function() {
    res.redirect("/");
  });
});



// Export routes 
module.exports = router;
