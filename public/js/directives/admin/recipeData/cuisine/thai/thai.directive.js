angular
  .module('myApp')
  .directive('thai', thai);

function thai () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/cuisine/thai/thai.directive.html'
  };
}
