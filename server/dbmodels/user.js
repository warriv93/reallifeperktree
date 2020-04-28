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
	if (!this.password) return;
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
	next();
});

User.pre('findOneAndUpdate', function (next) {
	// if update set 
	if (this._update != null) {		
		//check if password is to be updated
		if (!this._update.password) {
			// console.log ("Not hashing ", this._update.password);
		}
		else {
			this._update.password = bcrypt.hashSync(this._update.password, bcrypt.genSaltSync(8), null);
		}
	}
	next();
});

User.plugin(passportLocalMongoose);


// Makes the Upload module publicly available
module.exports = mongoose.model('User', User)
