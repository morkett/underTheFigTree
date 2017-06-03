angular
  .module('myApp')
  .directive('english', english);

function english () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/cuisine/english/english.directive.html'
  };
}
