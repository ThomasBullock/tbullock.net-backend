const passport = require("passport");
const db = require("../models"); // new require for db object
const bcrypt = require("bcrypt");
const BCRYPT_SALT = 12;
const jwtSecret = require("../config/jwtConfig");
const jwt = require("jsonwebtoken");

exports.login = (req, res, next) => {
  console.log(req.body);
  passport.authenticate("login", { session: false }, (err, user, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === "bad username") {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      req.logIn(user, () => {
        db.User.findOne({
          where: {
            username: req.body.username
          }
        }).then(user => {
          const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
            expiresIn: 60 * 60 * 60
          });
          res.status(200).send({
            auth: true,
            token,
            message: "user found & logged in",
            expiresIn: 60 * 60 * 60
          });
        });
      });
    }
  })(req, res, next);
};

exports.register = (req, res, next) => {
  try {
    const { username, password } = req.body;
    db.User.findOne({
      where: {
        username
      }
    }).then(user => {
      if (user !== null) {
        console.log("username already exists");
        return done(null, false, { message: "username already" });
      } else {
        bcrypt.hash(password, BCRYPT_SALT).then(hashedPassword => {
          db.User.create({ username, password: hashedPassword }).then(user => {
            console.log("user created");
            return next(null, user);
          });
        });
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.authorized = (request, response, next) => {
  passport.authenticate("jwt", { session: false }, async (error, token) => {
    if (error || !token) {
      response.status(401).json({ message: "Unauthorized" });
    }
    try {
      const user = await db.User.findOne({
        where: { id: token.id }
      });
      request.user = user;
    } catch (error) {
      next(error);
    }
    next();
  })(request, response, next);
};
