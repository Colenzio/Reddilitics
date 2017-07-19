    angular.module('Reddilitics', ['ngRoute'])

    // configure our routes
    .config(function($routeProvider) { 
        $routeProvider

            // route for the home page
            .when('/index', {
                templateUrl : 'ngviews/index.html',
                controller  : 'indexController'
            })

            .when('/user', {
                templateUrl : 'ngviews/user.html',
                controller  : 'userController'
            })


             .when('/subreddit', {
                templateUrl : 'ngviews/subreddit.html',
                controller  : 'subredditController'
            })

             .when('/list', {
                templateUrl : 'ngviews/list.html',
                controller  : 'listController'
            })
             

            .otherwise({redirectTo: "/index"});
    });

