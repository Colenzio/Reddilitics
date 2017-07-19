var express = require('express');
var router = express.Router();
var reddit = require('redwrap')
var Test = require("./../app/models/test")

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	return res.render('index');
// });

router.get('/api/reddit/:subreddit', function(req, res, next) {

	console.log(req.user);

	var subR = (!req.params.subreddit) ? 'all' : req.params.subreddit;


	reddit.r(subR, function(err, data, raw) {
		if (err) {
			console.error(err)
		}

		res.send(data.data.children)
	})
});





 router.get('/user/:username', function(req, res, next) {

 	reddit.user(req.params.username, function(err, data){
 		console.log(res);
  		 // console.log(data); //outputs a parsed javascript object represeting
  		 res.send(data.data.children);
	});
 });




router.get('/list/:listName', function(req, res, next) {

 reddit.list(req.params.username, function(err, data){
    console.log(res); //object representing the front page of reddit w/ 'hot' filter
});

});



// router.get('/user/:username', function(req, res, next) {
// 	reddit.user(req.params.username).comments().all( function(err, data, raw) { 
// 		if (err) {
// 			console.error(err)
// 		}

// 			console.log(data)

// 		res.send(data);
// 	})
// });


// router.get('/user/:username', function(req, res, next) {

//  	reddit.user(req.params.username).comments().sort('top').all(function(err, data, res) {
// 		res.on('data', function(data, res) {
// 			console.log(data);
// 			// res.send(data.data.children) //a parsed javascript object of the requested data 
// 			// console.log(res); //the raw response data from Reddit 
// 		});
 
// 		res.on('error', function(e) {
// 			console.log(e); //outputs any errors 
// 		});
	 
// 		res.on('end', function(){
// 			console.log('All Done');
 		

// 		console.log(err);
// 		console.log(data);

// 		return res.send(data);
// 	 });
//   });

//  });






router.get("/test", function(req, res, next){
	var test = new Test({title:'\dom'});

	test.save(function(err){
		if(err){
			console.log(err)
		}
		else{
				return res.send(test)
		}
	
	})
});


module.exports = router;
