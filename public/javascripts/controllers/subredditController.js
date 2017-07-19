angular.module('Reddilitics')
.controller("subredditController", subredditController);

function subredditController($scope, redditFactory, $rootScope){
	$scope.name = 'Subreddit';
	$scope.reddit = null;
	$scope.dave = 'Enter Subreddit..';
	$scope.menuOpen = false;
	$scope.subreddit = null;
	$scope.subreddit2 = null;
	$scope.reddit2 = null;

	$scope.mes = $rootScope.message

	//toggle arrow
	$scope.openMenu = function(){
		$scope.menuOpen = !$scope.menuOpen;
		$("#wrapper").toggleClass("toggled");
	}



	$scope.isData = false;
	$scope.getOption = function(option){
		console.log($scope.subreddit);
		console.log('isData', $scope.isData)
		if($scope.subreddit!== null) {
			if ($scope.isData === true){ 

				$scope.add($scope.subreddit);
				 
			}
			else{
					console.log('if')
			// $scope.isData = true;
				redditFactory.getReddit($scope.subreddit).then(function(data) {
					$scope.reddit = data;
					$scope.isData = true;
			 		$scope.getData($scope.reddit, option);
				});
			}
		// 		console.log('if')
		// 	// $scope.isData = true;
		// 	redditFactory.getReddit($scope.subreddit).then(function(data) {
		// 		$scope.reddit = data;
		//  		$scope.getData($scope.reddit, option);
		// 	});
		// } else {
		// 	$scope.add($scope.Subreddit);

		// }
		 
	}
}


	$scope.getData = function(data, option){
		var chartData = [];
		console.log('option')
		angular.forEach(data, function(key, val){
			// console.log(key)
			chartData.push(key.data[option])
		})
		chartData.unshift($scope.subreddit);
		console.log(chartData)
		//loop over reddit
		//add each item (ups value)
		//add 'ups' to start of array
		//pass array to data
		$scope.chart = c3.generate({
		    bindto: '#chart',
		    axis: {
 			 y: {
   			 label: 'Total Upvotes',
   			 position: 'outer-middle',
 			 }
 			},
		    data: {
		      columns: [ chartData ], 
		    },
		    zoom: {
		  		enabled: true
			}
		});
}

// $scope.getData($scope.subreddit);



$scope.add = function (option){
	var chartData = [];
	console.log('$scope.dave', option)
	redditFactory.getReddit(option).then(function(data) {
		$scope.reddit2 = data;
		// console.log($scope.reddit2)
		//create array
		// $scope.getData('ups');
		
		angular.forEach($scope.reddit2, function(key, val){
			console.log(key)
			chartData.push(key.data.ups)
		})
		chartData.unshift(option);
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



///////////////////////////////////////COMMENT CHART////////////////////////////////////////////////////


$scope.isData2 = false;
	$scope.getOption2 = function(option2){
		console.log($scope.subreddit2);
		console.log('isData2', $scope.isData2)
		if($scope.subreddit2!== null) {
			if ($scope.isData2 === true){ 

				$scope.add2($scope.subreddit2);
				 
			}
			else{
					console.log('if')
			// $scope.isData = true;
				redditFactory.getReddit($scope.subreddit2).then(function(data2) {
					$scope.reddit2 = data2;
					$scope.isData2 = true;
			 		$scope.getData2($scope.reddit2, option2);
				});
			}
		// 		console.log('if')
		// 	// $scope.isData = true;
		// 	redditFactory.getReddit($scope.subreddit).then(function(data) {
		// 		$scope.reddit = data;
		//  		$scope.getData($scope.reddit, option);
		// 	});
		// } else {
		// 	$scope.add($scope.Subreddit);

		// }
		 
	}
}


	$scope.getData2 = function(data2, option2){
		var chartData = [];
		console.log('option2')
		angular.forEach(data2, function(key, val){
			// console.log(key)
			chartData.push(key.data[option2])
		})
		chartData.unshift($scope.subreddit2);
		console.log(chartData)
		//loop over reddit
		//add each item (ups value)
		//add 'ups' to start of array
		//pass array to data
		$scope.chart2 = c3.generate({
		    bindto: '#chart2',
		    axis: {
 			 y: {
   			 label: 'Total Upvotes',
   			 position: 'outer-middle',
 			 }
 			},
		    data: {
		      columns: [ chartData ], 
		    },
		    zoom: {
		  		enabled: true
			}
		});
}

// $scope.getData($scope.subreddit);



$scope.add2 = function (option2){
	var chartData = [];
	console.log('$scope.dave', option2)
	redditFactory.getReddit(option2).then(function(data2) {
		$scope.reddit3 = data2;
		// console.log($scope.reddit2)
		//create array
		// $scope.getData('ups');
		
		angular.forEach($scope.reddit3, function(key, val){
			console.log(key)
			chartData.push(key.data.num_comments)
		})
		chartData.unshift(option2);
		console.log(chartData);
		$scope.chart2.load({columns: [ chartData ]})
	});
	
		

	
}

$scope.pie2 = function(){
	$scope.chart2.transform('pie');
}
$scope.bar2 = function(){
	$scope.chart2.transform('bar');
}
$scope.spline2 = function(){
	$scope.chart2.transform('spline');
}






	

	
}