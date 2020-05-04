const http = require('http');

// Fetches Express Handlebars (Template engine)
// var exphbs  = require('express-handlebars');
// Fetches ParseUrl to .. parse URLS
// var parseurl = require('parseurl');
// var path = require('path');

// Express API CRUD 
var express = require('express')
// body-parser, an Express middleware which parses the req.body property -> JSON object
var bodyparser = require('body-parser');
//LOGGER FOR BACKEND DEV
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport')
// allows Sessions used by passport (https://github.com/expressjs/session)
const session = require('express-session');

//SERVICES
var mongodb = require('./services/connectMongoDB');

// ROUTES
var index = require('./routes/index');
var user = require('./routes/user');


// Create "APP" as an instance of Express
var app = new express();
app.use(cookieParser());
app.use(logger('dev'));
// Set app to use bodyParser so that it supports JSON-encoded bodies
app.use(bodyparser.json({ limit: '5000mb' }));
app.use(bodyparser.urlencoded({ limit: '5000mb', extended: true }));

// Use Express Session
app.use(session({
    secret: '1337_coder',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}))

//init passport (authentication)
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./config/passport')(passport); // pass passport for configuration

//init database
mongodb.init(res => {
    console.info(res);
});

// TODO : CHANGE TO ONLY ALLOW DOMAIN 
// Set Access Control / Origin / Headers To allow file storage
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


//ROUTES
app.use('/', index);
app.use('/user', user);


// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



// Create http app
const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 1337;

// creating server and passing in express api
const server = http.createServer(app);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
