function RecipeFactory($http) {
  return {
    getRecipes: function() {
      return $http({
        method: 'GET',
        url: '/api/recipes'
      });
    },
    createRecipe: function(newPost) {
      return $http({
        method: 'POST',
        url: '/api/recipes',
        data: newPost
      });
    },
    getOne: function(recipeId) {
      return $http({
        method: 'GET',
        url: `/api/recipes/${recipeId}`
      });
    },
    deletePost: function(recipeId) {
      return $http({
        method: 'DELETE',
        url: `/api/recipe/${recipeId}`
      });
    }
  };

}
RecipeFactory.$inject = ['$http'];

angular
  .module('myApp')
  .factory('RecipeFactory', RecipeFactory);
