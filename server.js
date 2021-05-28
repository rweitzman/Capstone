const express = require("express");
const app = express();
const PORT = 4000;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, function () {
    console.log("I'm a little server hear me roar");
});

module.exports = app;