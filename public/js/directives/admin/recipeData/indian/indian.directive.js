angular
  .module('myApp')
  .directive('cambodian', cambodian);

function cambodian () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/cambodian/cambodian.directive.html'
  };
}
