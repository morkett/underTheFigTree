function RecipeFactory($http) {
  return {
    getAll: (searchTerm) => {
      var searchString = searchTerm.replace(' ', '+');
      return $http({
        method: 'GET',
        url: `/api/movies/search/${searchString}`
      });
    },
    getOne: (recipeId) => {
      return $http({
        method: 'GET',
        url: `/api/movies/${recipeId}`
      });
    },
    getMainList: () => {
      return $http({
        method: 'GET',
        url: `/api/movies/getMainList`
      });
    }
  };
}
RecipeFactory.$inject = ['$http'];

angular
  .module('myApp')
  .factory('RecipeFactory', RecipeFactory);
