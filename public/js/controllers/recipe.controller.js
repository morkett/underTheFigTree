function RecipeController(RecipeFactory, $state, $stateParams){
  var controller = this;
  // controller.recipe = [];


  controller.getRecipes = function() {
    RecipeFactory.getRecipes().then(
      function(success) {
        console.log('getRecipe: controller.recipe:', success);
        controller.recipe = success.data;
      },
      function (error) {
        console.warn('getRecipe: no results', error);
      }
    );
  };
  controller.createPost = function() {
    console.log('createPost()');
    controller.recipeBody.username = 'fred';
    RecipeFactory.createPost(controller.recipeBody).then(
        function success(response) {
       //redirects to another state
          console.log('Created new recipe: ', response);
          $state.reload();
        },
     function error(error) {
       console.warn('Error creating recipe:',error);
     }
    );
  };

  controller.getPost = function(){
    var recipeId = $stateParams.recipeId;
    RecipeFactory.getOne(recipeId).then(
      function success(res) {
        console.log('getPost:',res);
        controller.selectedPost = res.data;
      },
      function error(err){
        console.log('Error getting recipe, front', err);
      }
    );
  };

  controller.deletePost = function(recipeId){
    RecipeFactory.deletePost(recipeId).then(
      function success(res) {
        console.log('deleted',res);
        $state.go('home');

      },
      function error(err){
        console.warn('Error deleting recipe',err);
      }
    );
  };

}



RecipeController.$inject = ['RecipeFactory', '$state', '$stateParams'];
angular
  .module('myApp')
  .controller('RecipeController', RecipeController);
