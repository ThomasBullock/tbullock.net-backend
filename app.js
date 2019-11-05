const express = require("express");
const bodyParser = require("body-parser");
const api = require("./api");

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", api);

module.exports = app;
