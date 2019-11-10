const jwtSecret = require("./jwtConfig");
const bcrypt = require("bcrypt");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models"); // new require for db object
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret.secret
};

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false
    },
    (username, password, done) => {
      console.log(username, password);
      try {
        db.User.findOne({
          where: {
            username
          }
        }).then(user => {
          console.log(user);
          if (user === null) {
            return done(null, false, { message: "bad username" });
          }
          bcrypt.compare(password, user.password).then(response => {
            if (response !== true) {
              console.log("passwords do not match");
              return done(null, false, { message: "passwords do not match" });
            }
            console.log("user found & authenticated");
            return done(null, user);
          });
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

console.log(opts);

passport.use(
  "jwt",
  new JWTstrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret.secret
    },
    (token, done) => {
      return done(null, token);
    }
  )
);
