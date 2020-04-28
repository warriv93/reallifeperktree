var express = require('express');
var router = express.Router();
var passport = require('passport')

// Fetches User Model
var UserModel = require("../models/user.js");

// CHECK IF USER IS LOGGED IN OTHERWISE REDIRECT TO /login
router.use((req, res, next) => {
  // ALLOWED URL REQUESTS AS LOGGEDOUT (Public)
  // if (req.url == "/all") return next();
  // Allow test URL
  //if(req.url == "/test") return next();

  // CHECKS IF REQUEST COMES FROM winnersdaremore server allow upload and update of videos
  // if (req.headers.host &&
  // 	(req.headers.host.toLowerCase().indexOf("videohostingsite") >= 0 ||
  // 		// req.headers.host.toLowerCase().indexOf("bethard") >= 0 ||
  // 		req.headers.host.toLowerCase().indexOf("localhost") >= 0)
  // 	// || req.headers.host.toLowerCase().indexOf("193.183.106.172") >= 0 )
  // ) {
  // if (req.url == "/upload") return next();
  // if (req.url == "/api/update") return next();
  // if (req.url == "/api/send/videos") return next();
  // }

  // If the user is logged in, allow next API Call to happen
  // if (req.isAuthenticated()) {
  return next();
  // }
  // If no User logged in, redirect to /login
  // else {
  //   res.redirect("/login")
  // }
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  res.send(req.body);
});

router.get('/logout', function (req, res) {
  // console.log(req.user); // req.user contains passport session user
  req.session.destroy()
  req.logout();
  res.redirect('/');
});

router.get('/all', function (req, res, next) {
  UserModel.findAll(function (users) {
    res.send(users);
  })
});

router.post('/new', function (req, res, next) {
  let newUser = new UserModel(req.body);
  newUser.save(user => {
    console.log("Saved user to database: ", user);
    //TODO rly send the whole user to frontend?
    res.send(user);
  });
});

router.put('/update/:username', function (req, res, next) {
  
  UserModel.update(req.params.username, req.body, user => {
    console.log("Updated user to database: ", user);
    res.send(user);
  });
});

router.delete('/delete/:id', function (req, res, next) {
  UserModel.findOneAndDelete(req.params.id, function (user) {
    res.send(user);
  })
});

router.get('/find/:username', function (req, res, next) {
  UserModel.findbyUsername(req.params.username, function (user) {
    res.send(user);
  })
});


router.get('/ping', function (req, res) {
  res.status(200).send("pong!");
});

module.exports = router;
