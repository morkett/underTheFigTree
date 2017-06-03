angular
  .module('myApp')
  .directive('sides', sides);

function sides () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/sides/sides.directive.html'
  };
}
