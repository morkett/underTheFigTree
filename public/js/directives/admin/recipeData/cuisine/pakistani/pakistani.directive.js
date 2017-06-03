angular
  .module('myApp')
  .directive('pakistani', pakistani);

function pakistani () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/cuisine/pakistani/pakistani.directive.html'
  };
}
