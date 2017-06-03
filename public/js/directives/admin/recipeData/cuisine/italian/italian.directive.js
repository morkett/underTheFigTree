angular
  .module('myApp')
  .directive('italian', italian);

function italian () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/cuisine/italian/italian.directive.html'
  };
}
