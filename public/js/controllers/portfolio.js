app.controller('PortfolioController', ['$scope', '$http', function($scope, $http){

  $http.get('/api/projects').success(function(projects){
    $scope.projects = projects;
  });

}]);