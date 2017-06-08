angular
  .module('myApp')
  .directive('filter', navFilters);

function navFilters () {
  return {
    restrict: 'E',


    templateUrl: 'js/directives/admin/btns/navFilters/navFilters.directive.html'

  };
}
