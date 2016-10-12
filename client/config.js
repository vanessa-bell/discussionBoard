var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: './views/login.ejs',
		controller: 'userController'
	})
	.when('/dashboard', {
		templateUrl: './views/dashboard.ejs',
		controller: 'dashboardController'
	})
	.when('/topic/:id', {
		templateUrl: './views/topic.ejs',
		controller: 'topicController'
	})
	.when('/user/:id', {
		templateUrl: './views/user.ejs',
		controller: 'userController'
	})
	.otherwise({
		redirectTo: '/'
	});
});