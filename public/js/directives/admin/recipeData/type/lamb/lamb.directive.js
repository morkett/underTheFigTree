angular
  .module('myApp')
  .directive('lamb', lamb);

function lamb () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/lamb/lamb.directive.html'
  };
}
