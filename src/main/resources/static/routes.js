angular
	.module('myApp')
	.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/home', { templateUrl: 'home/home.html', controller: 'homeController'})
      .when('/destinationAdmin', { templateUrl: 'destination/destination.admin.html', controller: 'destinationController'})
      .otherwise({ redirectTo: '/home' });
    
}]);