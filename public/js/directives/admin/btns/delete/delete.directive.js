angular
  .module('myApp')
  .directive('deletebtn', deleteBtn);

function deleteBtn () {
  return {
    restrict: 'E',
    scope: {
      cntr: '=',
      recipeid: '=',
      del: '='
    },

    templateUrl: 'js/directives/admin//btns/delete/delete.directive.html',

    link: function (scope, element, attrs) {
      scope.allowDelete = false;

      scope.toggleDelete = function () {
        scope.allowDelete = !scope.allowDelete;
      };

      scope.removeEmptyObj = function () {
        console.log('cntr', scope.cntr);
        console.log('recipeid', scope.recipeid);
        scope.cntr(scope.recipeid);
      };

    }
  };
}
