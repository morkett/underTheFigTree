angular
  .module('myApp')
  .directive('veg', veg);

function veg () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/veg/veg.directive.html'
  };
}
