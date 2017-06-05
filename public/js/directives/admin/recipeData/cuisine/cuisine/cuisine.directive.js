angular
  .module('myApp')
  .directive('cambodian', cambodian);

function cambodian () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/cuisine/cambodian/cambodian.directive.html'
  };
}
