angular
  .module('myApp')
  .directive('pork', pork);

function pork () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/pork/pork.directive.html'
  };
}
