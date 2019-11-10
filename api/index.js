const express = require("express");
const api = express.Router();
const db = require("../models"); // new require for db object
const authController = require("../controllers/authController");
const passport = require("passport");

// function authorized(request, response, next) {
//   passport.authenticate("jwt", { session: false }, async (error, token) => {
//     if (error || !token) {
//       response.status(401).json({ message: "Unauthorized" });
//     }
//     try {
//       const user = await db.User.findOne({
//         where: { id: token.id }
//       });
//       request.user = user;
//     } catch (error) {
//       next(error);
//     }
//     next();
//   })(request, response, next);
// }

api.get("/foo", (req, res) => {
  // console.log(req);
  res.send("Hello Coont!");
});

api.get("/user", authController.authorized, (req, res) => {
  console.log("GET user");
  // return db.User.findAll()
  //   .then(users => {
  //     // console.log(users);
  //     res.send(users);
  //   })
  //   .catch(err => {
  //     console.log("There was an error querying contacts", JSON.stringify(err));
  //     return res.send(err);
  //   });
  return res.send({ id: req.user.id, username: req.user.username });
});

module.exports = api;
