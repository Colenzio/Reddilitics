var passport = require('passport')
  , util = require('util')
  , crypto = require('crypto')
  , RedditStrategy = require('passport-reddit').Strategy
  , express = require("express")
  , session = require("express-session");

var REDDIT_CONSUMER_KEY = "n8aMPdxr_aHjlw";
var REDDIT_CONSUMER_SECRET = "VbY7axxyflVbSaXOZCAWdZreN3c";

module.exports = function(app) {
	passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new RedditStrategy({
    clientID: REDDIT_CONSUMER_KEY,
    clientSecret: REDDIT_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/reddit/callback",
    state: true
  },
  function(accessToken, refreshToken, profile, done) {

  	profile.token = accessToken;

  	// console.log(accessToken);

    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Reddit profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Reddit account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

app.use(session({ 
	resave: false,
	saveUninitialized: false,
	secret: 'keyboard cat' 
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.initialize());

// app.get('/auth/reddit', function(req, res, next){
//   req.session.state = crypto.randomBytes(32).toString('hex');
//   passport.authenticate('reddit', {
//     state: req.session.state,
//   })(req, res, next);
// });
app.get("/auth/reddit", passport.authenticate("reddit"));


// app.get('/auth/reddit/callback', function(req, res, next){
//   // Check for origin via state token
//   if (req.query.state == req.session.state){
//     passport.authenticate('reddit', {
//       successRedirect: '/',
//       failureRedirect: '/login'
//     })(req, res, next);
//   }
//   else {
//     next( new Error(403) );
//   }
// });

app.get("/auth/reddit/callback", passport.authenticate("reddit", {
	successRedirect: "/",
	failureRedirect: "/login"
}));

app.get('/login', function(req, res) {
	return res.send(req.user);
});

app.get('/', isLoggedIn,  function(req, res, next) {
       // console.log(req.user);

       console.log(req.user.token);

        return res.render('index', {
            key: req.user.token
        });
});


function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) return next();

	res.redirect('/auth/reddit');
}


};