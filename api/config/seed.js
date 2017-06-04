var seeder = require('mongoose-seed');
var prompt = require('prompt');

confirm();

function confirm () {
  console.log('***************** Warning! *****************');
  console.log();
  console.log('This is a destructive action and with truncate the following collections: ["Product"]');
  console.log('Do you want to continue? (Y/N)');

  prompt.start();

  prompt.get(['confirm'], function (err, result) {
    if (result.confirm.toLowerCase() === 'y') {
      console.log('Running Seed...');
      seed();

    } else {
      console.error('Aborting Seed...');
      process.exit();
    }
  });
}

function seed () {

  seeder.connect(require('../../env').db_url, function () {
    seeder.loadModels([require('../../env').path + '/api/models/recipe.model.js']);
    seeder.clearModels(['Recipe'], function () {
      seeder.populateModels(data, function (err) {
        if (err) console.log(err);
        console.log('DB Seeded. Exiting...');
        process.exit();
      });
    });
  });

  var data = [
    {
      'model': 'Recipe',
      'documents': [
        {
          title: 'Cambodian Marinated Beef (Beef Lok Lak)',
          cuisine: 'cambodian',
          serves: 2,
          type: 'beef',

          ingredients: [
            {
              quantity: '500',
              unit: 'g',
              name: 'beef steak thinly cut'},
            {
              quantity: '1',
              unit: '',
              name: 'onion'},
            {
              quantity: '',
              unit: '',
              name: 'Mix veg (optional)'},
            {
              quantity: '1/2',
              unit: '',
              name: 'lime'}
          ],
          instructions: [
            '500g beef steak + marinade ingredients → 20 min',
            'Wok + oil + 1 onion + mix veg → soft’, beef → 2-3 min',
            'coriander + 1/2 lime → serve'
          ],
          ingredients_2: [
            '1 red chili',
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
          isLive: 'no'
        }
      ]
    }
  ];
}
