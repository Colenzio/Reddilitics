(function(){
	'use strict';

	angular.module("Reddilitics")
	.factory("redditFactory", redditFactory);

	function redditFactory($http, $q){

		var results = {};

		////////////////////SUBREDDIT///////////////////////////

		results.getReddit = function(subreddit){

			var defer = $q.defer();

			$http.get('/api/reddit/'+ subreddit)
			.success(function(data){
				defer.resolve(data);
				console.log(data)
			})
			.error(function(err, status){
				defer.reject(err);
			});

			return defer.promise;
		}

		////////////////////USER////////////////////////////


		results.getRedditUser = function(user){

			var defer = $q.defer();

			$http.get('/user/' + user)
			.success(function(data){
				defer.resolve(data);
				console.log(data)
			})
			.error(function(err, status){
				defer.reject(err);
				console.log(err, status)
			});

			return defer.promise;
		}


		////////////////////LIST////////////////////////////


		results.getRedditList = function(user){

			var defer = $q.defer();

			$http.get('/list/' + listName)
			.success(function(data){
				defer.resolve(data);
				console.log(data)
			})
			.error(function(err, status){
				defer.reject(err);
				console.log(err, status)
			});

			return defer.promise;
		}


		/////////////////////////////////////////////////


		return results;
	};

	redditFactory.$inject = ['$http', '$q'];

})();