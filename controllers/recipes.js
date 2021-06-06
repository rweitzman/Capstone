const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", function (req, res) {
    const context = {
        allRecipes: db.Recipes,
    };
    res.render("home", context);
});

router.get("/Recipes/:index", function (req, res) {
    const context = {
        Recipes: db.Recipes[req.params.index],
    };
   res.render("recipe", context) 
});


module.exports = router;