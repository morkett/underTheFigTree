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
    },
    editOne: function(editedRecipe){
      return $http({
        method: 'PATCH',
        url: `/api/recipes/${editedRecipe._id}`,
        data: editedRecipe
      });
    },
    getRecipeByCuisine: function(cuisine) {
      return $http({
        method: 'GET',
        url: `/api/cuisine/${cuisine}`,
        data: cuisine
      });
    }
  };

}
RecipeFactory.$inject = ['$http'];

angular
  .module('myApp')
  .factory('RecipeFactory', RecipeFactory);
