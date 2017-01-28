//map! after user presses explore
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userProfile = require('../models/user');

var app = express();

router.use(function(req,res,next){
	console.log("map request made!");
	next();
})

router.get('/',function(req,res,next){
	res.setHeader(checkedImgArray, req.body.checkedImgArray);
	res.render('mangomap');
	next();
});

//send information to map 
router.post('/', function(req,res,next){
	// console.log(req.body);
	// send coordinates to map 
	// console.log(req.body);
	// res.setHeader(checkedImgArray, req.body);

	// console.log(req.body);
	// console.log(req);
});

module.exports = router;