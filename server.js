const express = require("express");
const app = express();
const PORT = 4000;
app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render('home')
});


/**** SERVE IMAGES AND CSS ****/
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));

app.listen(PORT, function () {
    console.log("I'm a little server hear me roar");
});

module.exports = app;