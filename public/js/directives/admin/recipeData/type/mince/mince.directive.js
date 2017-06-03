angular
  .module('myApp')
  .directive('mince', mince);

function mince () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/mince/mince.directive.html'
  };
}
