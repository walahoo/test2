var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');

// var Flickr = require("flickrapi"),
//      flickrOptions = {
//       api_key: "cfbc7c7fe7cbc19aae015eea0cfd2561",
//       secret: "db5c9a3244798798",
//       user_id: "146808703@N04",
//       access_token: "72157677813892920-a99786a41a9106ed",
//       access_token_secret: "a0dc7d63541fe739"
//     };
// var APIkey = "cfbc7c7fe7cbc19aae015eea0cfd2561";
// var photoSizesInfo = {
//     photos: []
// };

var app = express();


//get homepage
router.get('/', ensureAuthenticated, function(req,res){
	res.render('index');
});

function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated()){
		return next();
	} else{
		//req.flash('error_msg', 'You are not logged in');
		res.redirect('/users/login');
	}
}

var map = require('./map');
router.use('/map', map);

module.exports = router;
