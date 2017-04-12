function RecipeController($stateParams, RecipeFactory ){
  var controller = this;


  controller.recipeListTest = [
    {title: 'Green Beans With Toasted Mustard and Garlic',
      cuisine: 'Indian',
      serves: '4',
      type: 'sides',
      ingredients: ['450g green beans - chopped', '4 garlic',
        '1 TBSP butter', '3/4 tsp mustard seeds','1/2 tsp chili flakes'
      ],
      instructions: ['Pan + oil + 1 TBSP butter + medium heat + 3/4 tsp mustard seeds → pops','↓ low heat + 4 garlic + 450g green beans + 3/4 tsp chili flakes + salt + cover → 20 min/cooked']
    },
    {
      title: 'Cambodian Marinated Beef (Beef Lok Lak)',
      cuisine: 'Cambodian',
      serves: '2',
      type: 'beef',
      ingredients: [
        '500g beef steak thinly cut',
        '1 onion',
        'Mix veg (optional)',
        '1/2 lime'
      ],
      marinade: ['1 red chili',
        '2 garlic',
        '1 TBSP ginger',
        '1/2 lime',
        '1 TBSP sugar',
        '3 TBSP soy sauce',
        '2 TBSP oyster sauce',
        '1 TBSP fish sauce',
        '2 TBSP ketchup',
        '3 tsp pepper'
      ],
      instructions: [
        '500g beef steak + marinade ingredients → 20 min',
        'Wok + oil + 1 onion + mix veg → soft’, beef → 2-3 min', 'coriander + 1/2 lime → serve'
      ]
    }

  ];
  console.log(controller.recipeListTest);

  function init() {
  }

  init();
}
RecipeController.$inject = ['$stateParams', 'RecipeFactory'];

angular
  .module('myApp')
  .controller('RecipeController', RecipeController);
