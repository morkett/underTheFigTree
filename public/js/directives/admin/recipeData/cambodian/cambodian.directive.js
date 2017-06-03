angular
  .module('myApp')
  .directive('indian', indian);

function indian () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/indian/indian.directive.html'
  };
}
