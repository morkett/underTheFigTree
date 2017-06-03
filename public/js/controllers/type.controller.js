function TypeController(RecipeFactory, $state, $stateParams){
  var controller = this;


  controller.getRecipeByType = function(type) {
    RecipeFactory.getRecipeByType(type).then(
     function success(success) {
       console.log('success getting specific recipe by type', success.data);
       controller.type = success.data;
     },
     function error(error) {
       console.warn('Could not get specific type: ', error);
     }
   );
  };


}



TypeController.$inject = ['RecipeFactory', '$state', '$stateParams'];
angular
  .module('myApp')
  .controller('TypeController', TypeController);
