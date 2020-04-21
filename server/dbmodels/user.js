// Fetches Mongoose (MongoDB helper)
var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	id: String,
	username: String,
	email: String,
	password: String,
	profilePicture: String,
	isAdmin: Boolean,
});

// Makes the Upload module publicly available
module.exports = mongoose.model('User', userSchema)
