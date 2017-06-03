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
        {title: 'Green Beans With Toasted Mustard and Garlic',
          cuisine: 'indian',
          serves: '4',
          type: 'sides',
          ingredients: ['450g green beans - chopped', '4 garlic',
            '1 TBSP butter', '3/4 tsp mustard seeds','1/2 tsp chili flakes'
          ],
          instructions: ['Pan + oil + 1 TBSP butter + medium heat + 3/4 tsp mustard seeds → pops','↓ low heat + 4 garlic + 450g green beans + 3/4 tsp chili flakes + salt + cover → 20 min/cooked']
        },
        {
          title: 'Cambodian Marinated Beef (Beef Lok Lak)',
          cuisine: 'cambodian',
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
      ]
    }
  ];
}
