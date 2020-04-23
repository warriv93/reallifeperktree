// config/passport.js
// The most widely used way for websites to authenticate users is via a username and password. Support for this mechanism is provided by the passport-local module.
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../dbmodels/user');

// expose this function to our app using module.exports
module.exports = passport => {
 // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());



  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { error: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { error: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
};
