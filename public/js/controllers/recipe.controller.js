function RecipeController(RecipeFactory, $state, $stateParams){
  var controller = this;

  controller.serveOptions = [1,2,3,4,5,6,7,8,9,10];
  controller.cuisineOptions = ['indian','cambodian'];
  controller.typeOptions = ['starters', 'prawns', 'seafood', 'fish', 'chicken', 'mince', 'lamb', 'beef', 'pork', 'vegetarian', 'sides', 'baking']

  controller.toggleCuisine = function() {
    controller.indian = !controller.indian;
    console.log(controller.indian);
  };

  controller.ing = ['ingredient'];

  controller.addNewChoiceIng = function() {
    var newItemNo = controller.ing.length + 1;
    controller.ing.push( 'employed-name-'+newItemNo);
    console.log('click');
  };



  controller.removeChoiceIng = function() {
    var lastItem = controller.inst.length-1;
    controller.inst.splice(lastItem);
  };

  controller.inst = ['instruction'];

  controller.addNewChoiceInst = function() {
    var newItemNo = controller.inst.length + 1;
    controller.inst.push( 'employed-name-'+newItemNo);
    console.log('click');
  };

  controller.removeChoiceInst = function() {
    var lastItem = controller.inst.length-1;
    controller.inst.splice(lastItem);
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
          $state.go('edit');
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
       console.log('success getting specific recipe by cuisine');
       controller.cuisine = success.data;
     },
     function error(error) {
       console.warn('Could not get specific cuisine: ', error);
     }
   );
  };


}



RecipeController.$inject = ['RecipeFactory', '$state', '$stateParams'];
angular
  .module('myApp')
  .controller('RecipeController', RecipeController);
