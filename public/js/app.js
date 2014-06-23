var app = angular.module('jh',['ngRoute','ngSanitize']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    templateUrl:'/views/home.html'	
  }).when('/portfolio',{
  	templateUrl:'/views/portfolio.html'
  }).when('/tutorials',{
  	templateUrl:'/views/tutorials.html'
  }).when('/contact',{
  	templateUrl:'/views/contact.html'
  }).otherwise({
  	redirectTo:'/'
  });
}]);

// Enable html5 Mode
app.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);