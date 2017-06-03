function RecipeFactory($http) {
  return {
    getRecipes: function() {
      return $http({
        method: 'GET',
        url: '/api/recipes'
      });
    },
    createRecipe: function(newRecipe) {
      return $http({
        method: 'POST',
        url: '/api/recipes',
        data: newRecipe
      });
    },
    getOne: function(recipeId) {
      return $http({
        method: 'GET',
        url: `/api/recipes/${recipeId}`
      });
    },

    deleteRecipe: function(recipeId) {
      return $http({
        method: 'DELETE',
        url: `/api/recipes/${recipeId}`
      });
    }
  };

}
RecipeFactory.$inject = ['$http'];

angular
  .module('myApp')
  .factory('RecipeFactory', RecipeFactory);
