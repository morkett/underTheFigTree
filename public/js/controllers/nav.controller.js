function NavController($state){
  var controller = this;

  controller.frontNavActive = false;
  controller.toggleFrontNav = function() {
    controller.frontNavActive = !controller.frontNavActive;
  };

}



NavController.$inject = ['$state'];
angular
  .module('myApp')
  .controller('NavController', NavController);
