angular
  .module('myApp')
  .directive('checkboxcusine', checkbox);

function checkbox () {
  return {
    restrict: 'E',
    scope: {
      cuisineoptions: '='
    },


    templateUrl: 'js/directives/admin/btns/recipeFilter/checkbox.cuisine.directive.html',


    link: function (scope, element, attrs) {
      scope.cuisineoptions.checkboxCus = 'all';

      scope.checkboxToggleCus = function
       () {
        scope.checkboxCus = 'english';
        console.log('hit');
      };
    }
  };
}
