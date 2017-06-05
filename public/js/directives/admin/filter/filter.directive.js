angular
  .module('myApp')
  .directive('filter', filter);

function filter () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/admin/filter/filter.directive.html'
  };
}
