angular
  .module('myApp')
  .directive('starters', starters);

function starters () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/starters/starters.directive.html'
  };
}
