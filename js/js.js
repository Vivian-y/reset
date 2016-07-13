var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('app', function($scope){
  
});
myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/first', {
	    templateUrl : 'html/first.html'
	});
	$routeProvider.when('/second', {
	    templateUrl : 'html/second.html',
	    controller :'second'

	});
	$routeProvider.when('/three', {
	    templateUrl : 'html/three.html',
	    controller :'three'
	});
	$routeProvider.when('/four', {
	    templateUrl : 'html/four.html',
	    controller :'four'
	});
	$routeProvider.when('/five', {
	    templateUrl : 'html/five.html',
	    controller :'five'
	});
	$routeProvider.when('/six', {
	    templateUrl : 'html/six.html',
	    controller :'six'
	});
	$routeProvider.when('/seven', {
	    templateUrl : 'html/seven.html',
	    controller :'seven'
	});
	$routeProvider.otherwise({
	    redirectTo : '/first'
	});
}]);
