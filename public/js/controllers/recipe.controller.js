function RecipeController(RecipeFactory, $state, $stateParams, $window, $timeout){
  var controller = this;

  controller.showMessage = false;
  controller.showMessageUpdated = false;
  controller.showMessageDeleted = false;

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

  controller.notesActive = false;
  controller.toggleNotes = function() {
    console.log('hit');
    controller.notesActive = !controller.notesActive;
  };

  controller.checkboxIsLive = 'all';
  controller.checkboxToggleIsLive = function(isLive){
    controller.checkboxIsLive = isLive;
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
  };

  controller.select= function(item) {
    controller.selected = item;
  };

  controller.isActive = function(item) {
    return controller.selected === item;
  };

  controller.unitsOptions = ['-','g','cups','ml','tsp', 'tbsp'];
  controller.makeOptions = ['-','5','10','15','20','25','30','40','45','50','55','60'];
  controller.serveOptions = ['-','1','2','3','4','5','6','7','8','9','10'];

  controller.cuisineOptions = ['-','cambodian', 'chinese', 'english', 'indian', 'italian', 'pakistani', 'thai'];

  controller.typeOptions2 = ['-','baking', 'beef', 'chicken', 'fish', 'lamb', 'mince', 'pork', 'prawns', 'seafood', 'veg'];

  controller.typeOptions1 = ['-','starters', 'main', 'side', 'breakfast', 'lunch', 'dinner'];

  controller.isLiveOptions = ['yes', 'no'];
  controller.newOptions = [false, true];

  controller.getRecipes = function() {
    RecipeFactory.getRecipes().then(
      function(success) {
        console.log('getRecipes: controller.recipe:', success);
        controller.results = success.data;
      },
      function (error) {
        console.warn('getRecipe: no results', error);
      }
    );
  };
  controller.createRecipe = function() {
    RecipeFactory.createRecipe(controller.recipeData).then(
        function success(response) {
          console.log('Created new recipe: ', response);
          controller.showMessage = true;
          $timeout(function() {
            controller.showMessage = false;
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
        console.log('getRecipe:',res);
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
        controller.showMessage = true;
        controller.showMessageDeleted = true;
        controller.showMessageUpdated = false;
        $timeout(function() {
          controller.showMessage = false;
          controller.showMessageDeleted = false;
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
        controller.showMessage = true;
        controller.showMessageUpdated = true;
        controller.showMessageDeleted = false;
        $timeout(function() {
          controller.showMessage = false;
          controller.showMessageUpdated = false;
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
