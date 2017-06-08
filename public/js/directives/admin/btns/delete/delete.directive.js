angular
  .module('myApp')
  .directive('deletebtn', deleteBtn);

function deleteBtn () {
  return {
    restrict: 'E',
    scope: {
      cntr: '=',
      recipeid: '='
    },

    templateUrl: 'js/directives/admin//btns/delete/delete.directive.html',

    link: function (scope, element, attrs) {
      scope.allowDelete = false;

      scope.toggleDelete = function () {
        scope.allowDelete = !scope.allowDelete;
      };

      scope.removeEmptyObj = function () {
        scope.cntr(scope.recipeid);
      };
    }
  };
}
