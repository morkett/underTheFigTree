angular
  .module('myApp')
  .directive('recipes', recipes);

function recipes () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/allRecipes/allRecipes.directive.html'
  };
}
