// * === Const and Require === * //
const express = require("express");
// const db = require("./models");
// const controllers = require("./controllers");
const app = express();
const PORT = 4000;
// const methodOverride = require("method-override");
app.set("view engine", "ejs");
// require("dotenv").config();
// const { response } = require("express");
// const router = express.Router();
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const bcrypt = require("bcryptjs");

app.get('/', function (req, res) {
    res.render('home')
});

app.get('/index', function (req, res) {
    res.render('index')
});


/**** SERVE IMAGES AND CSS ****/
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));

app.listen(PORT, function () {
    console.log("I'm a little server hear me roar");
});

module.exports = app;