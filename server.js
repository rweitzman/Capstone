// * === Const and Require === * //
const express = require("express");
const db = require("./models");
// const controllers = require("./controllers");
const app = express();
const PORT = 3000;
// const methodOverride = require("method-override");
app.set("view engine", "ejs");
// require("dotenv").config();
// const { response } = require("express");
// const router = express.Router();
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const bcrypt = require("bcryptjs");



app.get("/", function (req, res) {
    const context = {
        allRecipes: db.Recipes,
    };
    res.render("home", context);
});

app.get("/Recipes/:index", function (req, res) {
    const context = {
        Recipes: db.Recipes[req.params.index],
    };
   res.render("recipe", context) 
});


/**** SERVE IMAGES AND CSS ****/
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));

app.listen(PORT, function () {
    console.log("I'm a little server hear me roar");
});

module.exports = app;