var DatabaseObject = require("../dbmodels/user");
var User = function (data) {
	this.data = data;
}

User.prototype.data = {}

User.prototype.save = function (callback) {
	var self = this;

	console.log("Save User");
	// Creates an Object of the User Schema by using the User Model
	var UserDBObject = new DatabaseObject(self.data);

	// Saves the UserObject and retrieves the savedUserObject (The physical one from the DB!)
	UserDBObject.save(function (err, savedUserObject) {
		if (err) {
			console.log("Err: ", err);
			callback(err);
		}
		else {
			// Returns the savedUserObject through a Callback
			callback(savedUserObject);
		}
	});
}

/* GENERAL/CLASS FUNCTIONS */
User.findById = (id, callback) {
	// Find the User Object and Update it, {new: true} means that findByIdAndUpdate will return a updated User Object
	DatabaseObject.findById(id, function (err, UserObject) {
		if (err) {
			callback(err);
		}
		else {
			callback(UserObject);
		}
	});
}

User.findAll = function (callback) {
	DatabaseObject.find(function (err, Users) {
		if (err) {
			callback(err);
		}
		else {
			callback(Users);
		}
	});
}

module.exports = User;
