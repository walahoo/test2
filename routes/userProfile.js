//userProfile routes, for uploading
var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userProfile = require('../models/user');



var app = express();

var userProfile = require('../models/user');
router.use(function(req, res, next){
	console.log("request made in userProfile!");
	next();
})
router.get('/', function(req,res,next){
	res.render('userProfile');
});


router.post('userProfile', function(req,res,next){
	// passport.use(new LocalStrategy(
	//   function(username, password, done) {
	//    User.getUserByUsername(username, function(err, user){
	//    	if(err) throw err;
	//    	if(!user){
	//    		return done(null, false, {message: 'Unknown User'});
	//    	}
	//    	console.log(res.body.username);
	console.log("res.body: " + res.body);
	console.log("res.body.src: " + res.body.src);
	console.log("res.body.address: " + res.body.address);
	console.log("res.body.city: " + res.body.city);
	

});

module.exports = router;