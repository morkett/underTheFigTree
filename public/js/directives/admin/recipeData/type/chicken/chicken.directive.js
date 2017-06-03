angular
  .module('myApp')
  .directive('chicken', chicken);

function chicken () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/chicken/chicken.directive.html'
  };
}
