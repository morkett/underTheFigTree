angular
  .module('myApp')
  .directive('remove', remove);

function remove () {
  return {
    restrict: 'E',
    scope: {
      ingarr: '='
    },

    templateUrl: 'js/directives/admin/btns/remove/remove.directive.html',

    link: function (scope, element, attrs) {
      scope.allowRemove = false;

      scope.toggleRemove = function () {
        scope.allowRemove = !scope.allowRemove;
      };

      scope.removeEmptyObj = function () {
        scope.ingarr.pop();
      };

    }
  };
}
