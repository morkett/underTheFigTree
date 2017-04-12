function RecipeController($stateParams, RecipeFactory ){
  var controller = this;






            ///////////////////////////
////////////     getOne recipe        ////////////
              ///////////////////////////
  controller.getOneMovie = function(){
    var movieId = $stateParams.movieId;
    controller.results = [];
    RecipeFactory.getOne(movieId).then(
    (success) => {
      controller.results = success.data;
      console.log('movie:', success, movieId);
    },
      (error) => {
        console.warn('Error getting Movie:', error, movieId);
      }
    );
  };

  function init() {
  }

  init();
}
RecipeController.$inject = ['$stateParams', 'RecipeFactory'];

angular
  .module('myApp')
  .controller('RecipeController', RecipeController);
