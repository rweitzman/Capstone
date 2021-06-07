//mongoose 
const express = require("express");
const db = require("../models");
const router = express.Router();


// error page
router.get("/error", function (req, res) {
  res.render("error")
});

//* Recipes *//
// 1) url for home, contains index of recipes
router.get("/", function (req, res) {
  db.Recipe.find({}, function(err, foundRecipes) {
    const context = {
      allRecipes: foundRecipes,
    };
    res.render("home", context);
  })
});



// route for displaying each recipe with reviews
router.get("/:id", function (req, res) {
    db.Recipe.findById(req.params.id)
    .populate("reviews")
    .exec(function (err, foundRecipes) {
        if (err) {
    console.log(err)
    return res.send(err);
  }
        const context = { recipe: foundRecipes, allReviews: foundRecipes.reviews };
        res.render("recipe", context);
    });
});







module.exports = router;