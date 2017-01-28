//user model 

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true,
		unique:true,
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	photos:[
			{
			id: String,
			src : String,
			longitude : String,
			latitude : String,
			address: String,
			city: String
		}
	]//photo object within photo array containing (eventual) id-objects (which contain id, url/source, longitude and latitude)
	});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

// module.exports.updatePhotoInfo = function (id, api_key){
// 	User.findByIdAndUpdate(id, );
// }


module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}