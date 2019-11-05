const express = require("express");
const api = express.Router();
const db = require("../models"); // new require for db object

api.get("/foo", (req, res) => {
  console.log(req);
  res.send("Hello Coont!");
});

api.get("/user", (req, res) => {
  console.log("GET user");
  return db.User.findAll()
    .then(users => {
      console.log(users);
      res.send(users);
    })
    .catch(err => {
      console.log("There was an error querying contacts", JSON.stringify(err));
      return res.send(err);
    });
});

module.exports = api;
