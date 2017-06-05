angular
  .module('myApp')
  .directive('cuisine', cuisine);

function cuisine () {
  return {
    restrict: 'E',
    scope: {
      cntr: '=',
      cuisine: '@'
    },


    templateUrl: 'js/directives/admin/recipeData/cuisine/cuisine/cuisine.directive.html',


    link: function (scope, element, attrs) {
      scope.getCuisine = function () {
        scope.cntr(scope.cuisine);

      };
      scope.getCuisine();
    }
  };
}
