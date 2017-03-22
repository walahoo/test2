var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var multer = require('multer');
var formidable = require('formidable');
var util = require('util');
var options = { promiseLibrary: require('bluebird') };

mongoose.connect('mongodb://localhost/test2');

// for uploading images
var fs = require('fs');
var db = mongoose.connection;

var imageInfo = fs.readFileSync('./public/images/imageinfo/imageAddress.json');
var words = JSON.parse(imageInfo);
// console.log(words);

var routes = require('./routes/index');
var users = require('./routes/users');
var userProf = require('./routes/userProfile');
// var uploads = require('./routes/uploads');

//Init App
var app = express();


//View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');


// // BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.bodyParser({uploadDir:'/images/uploads'}));


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// // Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;//if user is there then we can access from anywhere
  next();
});


// Multer 
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images/uploads/');
    },
    filename: function(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpeg|jpg)$/)) {
            var err = new Error();
            err.code = 'filetype';
            return cb(err);
        } else {
            cb(null, file.originalname);
        }
    }
});
var upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }
});


app.post('/', upload.single('file'),function(req,res){
  var prevPhotos = fs.readFileSync('./public/images/imageinfo/imageAddress.json');
  var info = JSON.parse(prevPhotos);
    // console.log(JSON.stringify(prevPhotos));
    // console.log(JSON.parse(prevPhotos));
    var photoInfo = JSON.parse(JSON.stringify(req.body));
    var name = photoInfo.fileName;
    var location = photoInfo.address;
    info[name] = location;

    fs.writeFile('./public/images/imageinfo/imageAddress.json',JSON.stringify(info, null, 2), finished);

    function finished(err){
        console.log('all set.');
      }
    res.render('index');
});



// Set Port
app.set('port', (process.env.PORT || 2000));

app.listen(app.get('port'), function(){
  console.log('Server started on port '+ app.get('port'));
});



app.use('/', routes);
app.use('/users', users);
app.use('/userProfile', userProf);
