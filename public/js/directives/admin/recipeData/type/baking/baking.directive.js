angular
  .module('myApp')
  .directive('baking', baking);

function baking () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/baking/baking.directive.html'
  };
}
