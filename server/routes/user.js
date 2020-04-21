var express = require('express');
var router = express.Router();

// Fetches User Model
var UserModel = require("../models/user.js");

router.get('/all', function(req, res, next) {
  UserModel.findAll(function(users){
    res.send(users);
  })
});

router.post('/new', function(req, res, next){
  let newUser = new UserModel(req.body);
  newUser.save(function(user){
    console.log("Saved user to database", user);
    res.send(user);
  });
});

router.get('/:id', function(req, res, next) {
  UserModel.findById(req.params.id, function(user){
    res.send(user);
  })
});


/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send('respond with a rasfsdagasdgagsesource');
});

module.exports = router;
