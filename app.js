const express = require("express");
const bodyParser = require("body-parser");
const auth = require("./auth");
const api = require("./api");
const passport = require("passport");

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

app.use("/api/auth", auth);
app.use("/api", api);

module.exports = app;
