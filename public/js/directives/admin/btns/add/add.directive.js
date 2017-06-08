angular
  .module('myApp')
  .directive('additem', addItem);

function addItem () {
  return {
    restrict: 'E',
    scope: {
      inst: '='
    },

    templateUrl: 'js/directives/admin/btns/add/add.directive.html',

    link: function (scope, element, attrs) {

      scope.addEmptyObj = function () {
        scope.inst.push({});
        console.log('hit');
      };

    }
  };
}
