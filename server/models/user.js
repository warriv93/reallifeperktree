var DatabaseObject = require("../dbmodels/user");
var User = function (data) {
	this.data = data;
}

User.prototype.data = {}

/* GENERAL/CLASS FUNCTIONS */
User.prototype.save = function (callback) {
	var self = this;

	DatabaseObject.find({ username: self.data.username }, function (err, UserObject) {
		if (err) {
			callback(err);
		}
		else {
			if (UserObject.length > 0) {
				callback({ error: "Username already exist" })
			}
			else {
				console.log("Save User", self.data);
				// Creates an Object of the User Schema by using the User Model
				var UserDBObject = new DatabaseObject(self.data);

				// Saves the UserObject and retrieves the savedUserObject (The physical one from the DB!)
				UserDBObject.save(function (err, savedUserObject) {
					if (err) {
						console.error("Err: ", err);
						callback(err);
					}
					else {
						// Returns the savedUserObject through a Callback
						callback(savedUserObject);
					}
				});
			}
		}
	});
}

User.findById = function (id, callback) {
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
User.findbyUsername = function (username, callback) {
	// Find the User Object and Update it, {new: true} means that findByIdAndUpdate will return a updated User Object
	DatabaseObject.find({ username: username }, function (err, UserObject) {
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

User.findOneAndDelete = function (id, callback) {
	DatabaseObject.findOneAndDelete({ _id: id }, function (err, UserObject) {
		if (err) {
			callback(err);
		}
		else {
			callback(UserObject);
		}
	})
}

User.update = function (usernameToFind, newUserData, callback) {
	// newUserData.password = !newUserData.validPassword( newUserData.password) && DatabaseObject.generateHash(newUserData.password)
	// Mongoose documents track changes. You can modify a document using vanilla JavaScript assignments and Mongoose will convert it into MongoDB update operators.
	DatabaseObject.findOneAndUpdate({ username: usernameToFind }, newUserData, {new: true}, function (err, user) {
		// res.send(user);
		if (err) {
			console.error("Err: ", err);
			callback(err);
		}
		else {
			// delete user.password;
			// delete user._id;
			callback(user);
		}
	});
}

module.exports = User;
