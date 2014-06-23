app.controller('TutorialsController',['$scope','$http', function($scope, $http){
  
  $scope.tutorial = 'tutorial';
  $http.get('/api/tutorials').success(function(tutorials){
    $scope.tutorials = tutorials;
  });

}]);