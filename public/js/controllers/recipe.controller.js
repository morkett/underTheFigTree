function RecipeController(RecipeFactory, $state, $stateParams){
  var controller = this;

  controller.showAll = false;
  controller.ShowAll = function(){
    controller.showAll = !controller.showAll;
  };



  controller.serveOptions = [0,1,2,3,4,5,6,7,8,9,10];

  controller.cuisineOptions = ['cambodian', 'chinese', 'english', 'indian', 'italian', 'pakistani', 'thai'];

  controller.typeOptions2 = ['baking', 'beef', 'chicken', 'fish', 'lamb', 'mince', 'pork', 'prawns', 'seafood', 'veg'];

  controller.typeOptions1 = ['starters', 'main', 'side', 'breakfast', 'lunch', 'dinner'];

  controller.isLiveOptions = ['yes', 'no'];


  controller.allowDelete = false;
  controller.canDeleteToggle = function(){
    controller.allowDelete = !controller.allowDelete;
  };

  controller.allowRemoveIng = false;
  controller.canRemoveIng = function(){
    controller.allowRemoveIng = !controller.allowRemoveIng;
  };

  controller.allowRemoveIng2 = false;
  controller.canRemoveIng2 = function(){
    controller.allowRemoveIng2 = !controller.allowRemoveIng2;
  };

  controller.allowRemoveInst = false;
  controller.canRemoveInst = function(){
    controller.allowRemoveInst = !controller.allowRemoveInst;
  };

  controller.getRecipes = function() {
    RecipeFactory.getRecipes().then(
      function(success) {
        console.log('getRecipe: controller.recipe:', success);
        controller.results = success.data;
      },
      function (error) {
        console.warn('getRecipe: no results', error);
      }
    );
  };
  controller.createRecipe = function() {
    console.log('createRecipe()');
    RecipeFactory.createRecipe(controller.recipeData).then(
        function success(response) {
       //redirects to another state
          console.log('Created new recipe: ', response);
          // $state.go('edit');
        },
     function error(error) {
       console.warn('Error creating recipe:',error);
     }
    );
  };

  controller.getRecipe = function(){
    var recipeId = $stateParams.recipeId;
    RecipeFactory.getOne(recipeId).then(
      function success(res) {
        console.log('getPost:',res);
        controller.selectedRecipe = res.data;
      },
      function error(err){
        console.log('Error getting recipe, front', err);
      }
    );
  };

  controller.deleteRecipe = function(recipeId){
    RecipeFactory.deleteRecipe(recipeId).then(
      function success(res) {
        console.log('deleted',res);
        $state.go('edit');
      },
      function error(err){
        console.warn('Error deleting recipe',err);
      }
    );
  };

  controller.updateRecipe = function() {
    RecipeFactory.editOne(controller.selectedRecipe.recipe).then(
      function success(res) {
        console.log('recipe updated', res);
        $state.go('edit');
      },
      function error(err){
        console.warn('error updating recipie', err);
      }
    );
  };

  controller.getRecipeByCuisine = function(cat) {
    RecipeFactory.getRecipeByCuisine(cat).then(
     function success(success) {
       console.log('success getting specific recipe by cuisine', success.data);
       controller.results = success.data;
     },
     function error(error) {
       console.warn('Could not get specific cuisine: ', error);
     }
   );
  };

  controller.createClear= function() {
    controller.recipeData = {};
    controller.recipeData.ingredients = [{}];
    controller.recipeData.ingredients_2 = [{}];
    controller.recipeData.instructions = [{}];
  };

}



RecipeController.$inject = ['RecipeFactory', '$state', '$stateParams'];
angular
  .module('myApp')
  .controller('RecipeController', RecipeController);
