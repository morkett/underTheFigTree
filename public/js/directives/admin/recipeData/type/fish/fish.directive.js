angular
  .module('myApp')
  .directive('fish', fish);

function fish () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/fish/fish.directive.html'
  };
}
