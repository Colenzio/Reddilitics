var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//var users = require('./routes/reddit');

var app = express();
var mongoose = require("mongoose");

// mongoose.connect(configDB.url); // connect to our database
var configDB = require("./config/database.js")

mongoose.connect(configDB.url); // connect to our database

var routes = require('./routes/index');
require('./routes/auth.js')(app);

////////////////////////////////////////////////////////////////////////////////////////////////////

// //login
// var port     = process.env.PORT || 3000;
// var mongoose = require("mongoose");
// var passport = require("passport");
// var morgan = require("morgan");
// var session = require("express-session");
// var flash = require("connect-flash");
// var configDB = require("./config/database.js")

// // configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration

// // set up our express application
// app.use(morgan('dev')); // log every request to the console

// // required for passport
// app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session

// // routes ======================================================================
// require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


/////////////////////////////////////////////////////////////////////////////////////////////////////



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); //get info from html forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); //read cookies for Auth
app.use(express.static(path.join(__dirname, 'public')));

console.log(routes);
app.use(routes);
//app.use('/reddit', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
