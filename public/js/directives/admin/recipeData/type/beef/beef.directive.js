angular
  .module('myApp')
  .directive('beef', beef);

function beef () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/recipeData/type/beef/beef.directive.html'
  };
}
