angular.module('Reddilitics')
.controller("userController", userController);

function userController($scope, redditFactory, $rootScope){
	$scope.name = 'User';
	$scope.reddit = null;
	$scope.dave = 'Enter Subreddit..';
	$scope.menuOpen = false;
	$scope.user = null;

	$scope.mes = $rootScope.message;

	// $scope.getData = function(subreddit){
	// redditFactory.getReddit(subreddit).then(function(data) {
	// 		$scope.reddit = data;
	// 		console.log($scope.reddit)
	// 	});
	// }	
 	

	$scope.save = function() {
     $rootScope.key = localStorage.auth_key;
    	console.log('auth key : ',$rootScope.key)

                }


	$scope.getOption = function(option){

		if($scope.reddit) {
			redditFactory.getRedditUser($scope.reddit).then(function(data) {
			$scope.reddit = data;
		 	$scope.getData(option);
		 	console.log(data);
		});
		} else {
			$scope.add(option);
		}
		 
	}


	//toggle arrow
	$scope.openMenu = function(){
		$scope.menuOpen = !$scope.menuOpen;
		$("#wrapper").toggleClass("toggled");
	}



	$scope.getData = function(option){
		var chartData = [];
		angular.forEach($scope.reddit, function(key, val){
			// console.log(key)
			chartData.push(key.data[option])
		})
		chartData.unshift($scope.user);
		console.log(chartData)
		//loop over reddit
		//add each item (ups value)
		//add 'ups' to start of array
		//pass array to data
		$scope.chart = c3.generate({
		    bindto: '#chart',
		    data: {
		      columns: [ chartData ], 
		    },
		    zoom: {
		  		enabled: true
			}
		});
}

$scope.getData($scope.user);



$scope.add = function (){
	var chartData = [];
	// console.log($scope.dave)
	redditFactory.getRedditUser($scope.user).then(function(data) {
		$scope.reddit2 = data;
		// console.log($scope.reddit2)
		//create array
		// $scope.getData('ups');
		
		angular.forEach($scope.reddit2, function(key, val){
			console.log(key)
			chartData.push(key.data.ups)
		})
		chartData.unshift($scope.user);
		console.log(chartData);
		$scope.chart.load({columns: [ chartData ]})
	});
	
		

	
}
$scope.pie = function(){
	$scope.chart.transform('pie');
}
$scope.bar = function(){
	$scope.chart.transform('bar');
}
$scope.spline = function(){
	$scope.chart.transform('spline');
}
	

	
}

