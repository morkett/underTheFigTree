angular
  .module('myApp')
  .directive('seafood', seafood);

function seafood () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/seafood/seafood.directive.html'
  };
}
