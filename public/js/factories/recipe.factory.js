function RecipeFactory($http, Upload) {
  return {
    getRecipes: function() {
      return $http({
        method: 'GET',
        url: '/api/recipes'
      });
    },
    createRecipe: function(newRecipe) {
      return Upload.upload({
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
      return Upload.upload({
        method: 'PUT',
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
    },
    getRecipeByType: function(type) {
      return $http({
        method: 'GET',
        url: `/api/type/${type}`,
        data: type
      });
    },
    imgUpload: function() {
      return $http({
        method: 'POST',
        url: '/upload/single/'
      });
    }


  };
}
RecipeFactory.$inject = ['$http', 'Upload'];

angular
  .module('myApp')
  .factory('RecipeFactory', RecipeFactory);
