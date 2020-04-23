// Fetches Mongoose (MongoDB helper)
var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
var passportLocalMongoose = require('passport-local-mongoose');

var User = mongoose.Schema({
	username: String,
	email: String,
	password: String,
	profilePicture: String,
	isAdmin: Boolean,
});

// encrypt password
// generating a hash
User.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// compare hashed passwords
// checking if password is valid by comparing hashed passwords
User.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

User.pre('save', function (next) {
	if (!this.password) {
		return;
	}
	this.password = this.generateHash(this.password);
	next();
});

User.pre('update', function (next) {
	// if update set 
	if (this._update.$set != null) {		
		//check if password is to be updated
		if (!this._update.$set.password) {
			//console.log ("Not hashing ", this._update.$set.password);
		}
		else {
			this._update.$set.password = this.generateHash(this._update.$set.password);
		}
	}

	next();
});

User.plugin(passportLocalMongoose);


// Makes the Upload module publicly available
module.exports = mongoose.model('User', User)
