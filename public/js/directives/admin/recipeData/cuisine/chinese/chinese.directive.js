angular
  .module('myApp')
  .directive('chinese', chinese);

function chinese () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/cuisine/chinese/chinese.directive.html'
  };
}
