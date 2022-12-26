const router = require('express').Router();
const passport = require('passport')
// const mongoose = require("mongoose");
const User = require("../model/user");
const bcrypt = require("bcryptjs");
// const passportLocal = require("passport-local").Strategy;


router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("Wrong Credentials");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });
  router.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User({
          name:req.body.name,
          username: req.body.username,
          password: hashedPassword,
          admin:true
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  });
//  router.post("/logout", function(req, res, next) {
//     // req.logout(function(err) {
//     //   if (err) {
//     //     return next(err);
//     //   }
//     //   res.redirect('/');
//     // });

//     console.log("logout called")
//   })
  router.get("/user", (req, res) => {
    res.send(req.user);
    // console.log(); // The req.user stores the entire user that has been authenticated inside of it.
  });
  router.get('/login', (req, res, next) => {

    const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);

});
  module.exports = router;