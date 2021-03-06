var myApp=angular.module("myApp",["ngRoute"]);
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.otherwise({redirectTo:'/seven'})
	.when('/first',{templateUrl:'html/first.html',})
	.when('/second',{templateUrl:'html/second.html'})
	.when('/three',{templateUrl:'html/three.html'})
	.when('/four',{templateUrl:'html/four.html'})
	.when('/five',{templateUrl:'html/five.html'})
	.when('/six',{templateUrl:'html/six.html'})
	.when('/seven',{
		templateUrl:'html/seven.html',
		controller:seven
	});
	
}]);
function seven($scope,$rootScope,$http){
	$http({
		url:'data/data.json',
		method:'GET'
	}).success(function(data){
		$rootScope.json=data
	}).error(function(data,header,config,status){
		alert('请重新获取页面')
	});

	$scope.h=$('.seven').height();
	$('.seven-main').css({
		'height':$scope.h+'px'
	})
	$scope.falgTop1=true;
	$scope.falgTop2=true;
	$scope.flag_ol=true;
	$scope.flag_ul=true;
	$scope.p_show=true;
	//查看体质
	$scope.change_span=function(){
		$scope.falgTop1=false;
		$scope.falgTop2=false;
		$scope.flag_ol=false;
		$scope.flag_ul=true;
	};
	//阅读全文
	$scope.show=function(){
		$scope.flag_ul=false;
		$scope.p_show=false;
	}
	//下面食物
	$scope.flag_eat=false;
	$scope.flag_notEat=false;
	//宜吃
	$scope.eat=function(){
		$scope.flag_eat=!$scope.flag_eat;
	}
	//不宜吃
	$scope.notEat=function(){
		$scope.flag_notEat=!$scope.flag_notEat;
	}
}