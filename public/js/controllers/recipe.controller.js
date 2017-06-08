function RecipeController(RecipeFactory, $state, $stateParams, $window, $timeout){
  var controller = this;

  // controller.count = $('div').length;

  controller.numItems = function(className) {
    return $window.document.getElementsByClassName(className).length;
  };

  controller.showIng1 = true;
  controller.showIng1 = false;
  controller.toggleIng = function() {
    controller.showIng1 = !controller.showIng1;
    controller.showIng2 = !controller.showIng2;
  };

  controller.navActive = false;
  controller.toggleAdminNav = function() {
    controller.navActive = !controller.navActive;
  };

  controller.checkboxCus = 'all';
  controller.checkboxToggleCus = function(cuisine){
    controller.checkboxCus = cuisine;
  };

  controller.checkboxType = 'all';
  controller.checkboxToggleType = function(type){
    controller.checkboxType = type;
  };
  controller.checkboxType2 = 'all';
  controller.checkboxToggleType2 = function(type){
    controller.checkboxType2 = type;
    console.log(type);
  };

  controller.select= function(item) {
    controller.selected = item;
  };

  controller.isActive = function(item) {
    return controller.selected === item;
  };

  controller.makeOptions = ['-',5,10,15,20,25,30,40,45,50,55,60];
  controller.serveOptions = ['-',1,2,3,4,5,6,7,8,9,10];

  controller.cuisineOptions = ['-','cambodian', 'chinese', 'english', 'indian', 'italian', 'pakistani', 'thai'];

  controller.typeOptions2 = ['-','baking', 'beef', 'chicken', 'fish', 'lamb', 'mince', 'pork', 'prawns', 'seafood', 'veg'];

  controller.typeOptions1 = ['-','starters', 'main', 'side', 'breakfast', 'lunch', 'dinner'];

  controller.isLiveOptions = ['yes', 'no'];


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

          $timeout(function() {
            $state.go('edit');
          }, 1000);
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
        $timeout(function() {
          $state.go('edit');
        }, 1000);
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
        $timeout(function() {
          $state.go('edit');
        }, 1000);
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

  controller.navOn = function() {
    controller.navActive = true;
  };
}



RecipeController.$inject = ['RecipeFactory', '$state', '$stateParams', '$window', '$timeout'];
angular
  .module('myApp')
  .controller('RecipeController', RecipeController);
