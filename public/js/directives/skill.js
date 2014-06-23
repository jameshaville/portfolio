app.directive('skill', function($compile){
  return{
    restrict: 'E',
    template: '<li>{{name}}</li>',
    scope:{
      name:"@"
    },
    link: function(scope,elem,attrs){
      elem.on('mouseover', function(){
        elem.css('color','red');
      });
      elem.on('mouseout', function(){
        elem.css('color','black');
      });
    }
  }
});