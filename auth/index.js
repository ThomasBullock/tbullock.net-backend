const express = require("express");
const auth = express.Router();
const authController = require("../controllers/authController");
const passport = require("passport");
const ExpressBrute = require("express-brute");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

let store;
// Start slowing requests after 5 failed attempts to do something for the same user

if (config.environment == "development") {
  store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
} else {
  // TODO handle production
}
const bruteforce = new ExpressBrute(store);

auth.post("/login", authController.login); //
auth.post("/register", authController.register);

module.exports = auth;
