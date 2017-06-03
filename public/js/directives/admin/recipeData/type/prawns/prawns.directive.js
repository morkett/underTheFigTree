angular
  .module('myApp')
  .directive('prawns', prawns);

function prawns () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/prawns/prawns.directive.html'
  };
}
