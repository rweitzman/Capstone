// * === Const and Require === * //
const express = require("express");
const app = express();
const PORT = 3000;
//models
const db = require("./models");
const controllers = require("./controllers");
const methodOverride = require("method-override");
app.set("view engine", "ejs");
require("dotenv").config();
const router = express.Router();


/** MiddleWare **/
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


/** Controllers **/
app.use("/", controllers.recipes);
app.use("/reviews", controllers.reviews)

/**** SERVE IMAGES AND CSS ****/
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/scripts"));
app.use(express.static(__dirname + "/styles"));

app.listen(PORT, function () {
    console.log("I'm a little server hear me roar");
});

module.exports = app;