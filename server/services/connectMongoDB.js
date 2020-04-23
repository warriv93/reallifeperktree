// Fetches Mongoose (A framework for using MongoDB database)
const mongoose = require('mongoose');

//setup class exportable
let mongodb = function (data) {
	this.data = data;
}
mongodb.prototype.data = {}

mongodb.init = function (callback) {
  // Connect to the database
  mongoose.connect('mongodb+srv://rw:lZ2SrgosB2mTiZmX@cluster0-lkcv2.mongodb.net/perktree?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true }, function (err, db) {
	
	  if (err) throw err
	  db.collection('users').find().toArray(function (err, result) {
	    if (err) throw err
	    console.log("Existing users: ", result.length)
	  })
	})
	let db = mongoose.connection;
	// DB is the mongoose database connection
	db.on("error", function(err) {
		callback("Could not connect to MongoDB");
		return callback(err);
	});
	db.once('open', function() {
		// we're connected!
		callback("Successfully connected to MongoDB ");
	});
}

//export class
module.exports = mongodb;
