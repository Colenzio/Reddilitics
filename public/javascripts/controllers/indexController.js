angular.module('Reddilitics')
.controller("indexController", indexController);

function indexController($scope, redditFactory, $rootScope){ 
	$scope.name = 'List';
	$scope.reddit = null;
	$scope.dave = 'Enter Subreddit..';
	$scope.menuOpen = false;

	$scope.mes = $rootScope.message


//toggle arrow
	$scope.openMenu = function(){
		$scope.menuOpen = !$scope.menuOpen;
		$("#wrapper").toggleClass("toggled");
	}


		$scope.save = function() {
                     $rootScope.key = localStorage.auth_key;
                    console.log('auth key : ',$rootScope.key)

                }




$scope.chart = c3.generate({
    data: {
    	bindto: '#chart',
        columns: [
            ['data1', -30, 200, 200, 400, -150, 250],
            ['data2', 130, 100, -100, 200, -150, 50],
            ['data3', -230, 200, 200, -300, 250, 250]
        ],
        type: 'bar',
        groups: [
            ['data1', 'data2']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});



setTimeout(function () {
    $scope.chart.groups([['data1', 'data2', 'data3']])
}, 1000);

setTimeout(function () {
    $scope.chart.load({
        columns: [['data4', 100, -50, 150, 200, -300, -100]]
    });
}, 1500);

setTimeout(function () {
   $scope.chart.groups([['data1', 'data2', 'data3', 'data4']])
}, 2000);










    }



