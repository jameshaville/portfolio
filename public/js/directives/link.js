app.directive('activeLink', ['$location', function(location) {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var active = attrs.activeLink;
        var path = attrs.ngHref;
        scope.location = location;
        scope.$watch('location.path()', function(newPath) {
          path === newPath ? elem.addClass(active) : elem.removeClass(active);          
        });
      }
    };
}]);