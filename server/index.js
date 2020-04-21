const http = require('http');
// Fetches Express (Express.js) that takes care of the ROUTING
var express = require('express')
// Fetches Express Handlebars (Template engine)
var exphbs  = require('express-handlebars');
// Fetches ParseUrl to .. parse URLS
var parseurl = require('parseurl');
var path = require('path');
// Fetches bodyParser to allow fethcing body information from REST API calls
var bodyparser = require('body-parser');
//LOGGER FOR BACKEND DEV
var logger = require('morgan');
var cookieParser = require('cookie-parser');

//SERVICES
var mongodb = require('./services/connectMongoDB');

// ROUTES
var index = require('./routes/index');
var user = require('./routes/user');


// Create "APP" as an instance of Express
var app = express();
app.use(cookieParser());
// Set app to use bodyParser so that it supports JSON-encoded bodies
app.use(bodyparser.json({limit: '5000mb'}));
app.use(bodyparser.urlencoded({limit: '5000mb', extended: true}));

mongodb.init((res) => {
    console.info(res);
  });

//ROUTES
app.use('/test', index);
app.use('/user', user);


const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 1337;

const server = http.createServer(app);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});