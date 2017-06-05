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
          title: 'cambodian marinated beef (beef lok lak)',
          cuisine: 'cambodian',
          serves: 2,
          type: 'beef',

          ingredients: [
            {
              qty: '500',
              unit: 'g',
              name: 'beef steak thinly cut'},
            {
              qty: '1',
              unit: '',
              name: 'onion'},
            {
              qty: '',
              unit: '',
              name: 'Mix veg (optional)'},
            {
              qty: '1/2',
              unit: '',
              name: 'lime'}
          ],
          instructions: [
            {
              instruction: '500g beef steak + marinade ingredients → 20 min'
            },
            {
              instruction: 'Wok + oil + 1 onion + mix veg → soft’, beef → 2-3 min'
            },
            {
              instruction: 'coriander + 1/2 lime → serve'
            }
          ],

          ingredients_2: [
            {
              title: 'marinade'
            },
            {
              qty: '1',
              unit: '',
              name: 'red chili'},
            {
              qty: '2',
              unit: '',
              name: 'garlic'},
            {
              qty: '1',
              unit: 'TBSP',
              name: 'ginger'},
            {
              qty: '1/2',
              unit: '',
              name: 'lime'},
            {
              qty: '1',
              unit: 'TBSP',
              name: 'sugar'},
            {
              qty: '3',
              unit: 'TBSP',
              name: 'soy sauce'},
            {
              qty: '2',
              unit: 'TBSP',
              name: 'oyster sauce'},
            {
              qty: '1',
              unit: 'TBSP',
              name: 'fish sauce'},
            {
              qty: '2',
              unit: 'TBSP',
              name: 'ketchup'},
            {
              qty: '3',
              unit: 'tsp',
              name: 'pepper'}
          ],
          isLive: 'no'
        },
        {
          title: 'green beans with toasted mustard and garlic',
          cuisine: 'indian',
          serves: 4,
          type: 'sides',
          ingredients: [
            {
              qty: '450',
              unit: 'g',
              name: 'grean beans - chopped'
            },
            {
              qty: '4',
              unit: '',
              name: 'garlic'
            },
            {
              qty: '1',
              unit: 'TBSP',
              name: 'butter'
            },
            {
              qty: '3/4',
              unit: 'tsp',
              name: 'mustard seeds'
            },
            {
              qty: '1/2',
              unit: 'tsp',
              name: 'chili flakes'
            }
          ],
          instructions:
          [
            {
              instruction: 'Pan + oil + 1 TBSP butter + medium heat + 3/4 tsp mustard seeds → pops'
            },
            {
              instruction: '↓ low heat + 4 garlic + 450g green beans + 3/4 tsp chili flakes + salt + cover → 20 min/cooked'
            }
          ],
          ingredients_2: [],
          isLive: 'no'
        },
        {
          title: 'grilled lamb kebabs (mutton tikka)',
          cuisine: '',
          serves: 4,
          type: 'starters',

          ingredients: [
            {
              qty: '3',
              unit: 'TBSP',
              name: 'oil'
            },
            {
              qty: '2',
              unit: '',
              name: 'garlic'
            },
            {
              qty: '3/4',
              unit: 'tsp',
              name: 'cayenne'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'paprike'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'salt'
            },
            {
              qty: '1/2',
              unit: 'tsp',
              name: 'garam masala'
            },
            {
              qty: '500',
              unit: 'g',
              name: 'lamb'
            }
          ],

          ingredients_2: [],

          instructions: [
            {
              instruction: '500g beef steak + marinade ingredients → 20 min'
            },
            {
              instruction: 'Wok + oil + 1 onion + mix veg → soft’, beef → 2-3 min'
            },
            {
              instruction: 'coriander + 1/2 lime → serve'
            }
          ],

          isLive: 'no'
        },
        {
          title: 'onion bhajiyas',
          cuisine: 'indian',
          serves: 4,
          type: 'starters',

          ingredients: [
            {
              qty: '2',
              unit: '',
              name: 'onions'
            },
            {
              qty: '1',
              unit: 'inch',
              name: 'ginger'
            },
            {
              qty: '2',
              unit: '',
              name: 'garlic'
            },
            {
              qty: '1',
              unit: 'TBSP',
              name: 'coriander leaves'
            },
            {
              qty: '1/2',
              unit: 'tsp',
              name: 'chili'
            },
            {
              qty: '2',
              unit: 'tsp',
              name: 'cumin'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'turmeric'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'coriander'
            },
            {
              qty: '',
              unit: '',
              name: 'garam flour'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'baking powder'
            }
          ],
          instructions: [
            {

            }
          ],
          ingredients_2: [{}],

          isLive: 'no'
        },
        {
          title: 'mums chana masala',
          cuisine: 'indian',
          serves: 4,
          type: 'starters',

          ingredients: [
            {
              qty: '1',
              name: 'large onion'
            },
            {
              qty: '3',
              name: 'tomatoes'
            },
            {
              qty: '1',
              name: 'potatoe'
            },
            {
              name: 'coriander'
            },
            {
              qty: '2',
              name: 'garlic'
            },
            {
              name: 'lemon'
            },
            {
              qty: '1',
              name: 'red onion'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'mustard seeds'
            },
            {
              name: 'curry leaves (optional)'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'chilli'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'turmeric'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'coriander'
            },
            {
              qty: '3',
              unit: 'TBSP',
              name: 'tamarind'
            },
            {
              qty: '1',
              unit: 'can',
              name: 'chickpeas / black chickpeas'
            },
            {
              qty: '1/2',
              unit: 'tsp',
              name: 'garam masala'
            },
            {
              name: 'yoghurt'
            }
          ],
          instructions: [
            {
              instruction: 'Pan + oil + medium heat + 1 large onion + 1 tsp mustard seeds + curry leaves → soft'
            },
            {
              instruction: '+ 4 tomatoes + 2 garlic + 1 tsp cumin + 1 tsp chili + 1 tsp turmeric + 1 tsp'
            },
            {
              instruction: 'coriander + 1 potato + 2 TBSP tamarind + salt + enough water→ simmer until cooked'
            },
            {
              instruction: '+ 1 can chickpeas → 10 min'
            },
            {
              instruction: '+ coriander + 1/4 tsp garam masala + lemon → serve with 1 red onion + yoghurt'
            }
          ],
          ingredients_2: [],

          isLive: 'no'
        },
        {
          title: 'chicken florentine puffs',
          cuisine: 'english',
          serves: 4,
          type: 'starters',

          ingredients: [
            {
              qty: '1',
              name: 'egg'
            },
            {
              qty: '1',
              name: 'puff pastry'
            }
          ],
          ingredients_2: [
            {
              title: 'filling'
            },
            {
              qty: '2',
              name: 'cooked chicken breats'
            },
            {
              qty: '1/2',
              name: 'pack spinach, liquid squeezed'
            },
            {
              qty: '2',
              unit: 'TBSP',
              name: 'basil leaves'
            },
            {
              qty: '1-2',
              name: 'roasted red pepper'
            },
            {
              qty: '4',
              unit: 'TBSP',
              name: 'cream cheese'
            },
            {
              qty: '1/2',
              unit: 'cup',
              name: 'cup mozzarella/cheddar'
            },
            {
              qty: '1/4',
              unit: 'cup',
              name: 'gruyere/parmesan cheese'
            },
            {
              qty: '1/8',
              unit: 'tsp',
              name: 'garlic powder'
            },
            {
              qty: '1/8',
              tsp: 'tsp',
              name: 'garlic powder'
            },
            {
              qty: '1/8',
              unit: 'tsp',
              name: 'salt'
            },
            {
              qty: '1/8',
              unit: 'tsp',
              name: 'pepper'
            }
          ],
          instructions: [
            {
              instruction: 'oven 200°C'
            },
            {
              instruction: 'all filling ingredients → mix'
            },
            {
              instruction: 'Puff pastry + filling + (1 egg + 1 TBSP water → beat) + oven → 15-18 min'
            }
          ],
          isLive: 'no'
        },
        {
          title: 'mum\'s spring rolls',
          cuisine: 'chinese',
          serves: 0,
          makes: '30',
          type: 'starters',
          ingredients: [
            {
              qty: '1',
              name: 'chicken breast thinly sliced'
            },
            {
              qty: '2',
              name: 'handful of prawns - chopped'
            },
            {
              qty: '1',
              name: 'onion - chopped'
            },
            {
              qty: '2',
              name: 'mushrooms chooped'
            },
            {
              qty: '3/4',
              name: 'pack mixed veg chopped'
            },
            {
              qty: '2',
              unit: 'inch',
              name: 'ginger'
            },
            {
              qty: '3',
              name: 'spring onions'
            },
            {
              qty: '1',
              name: 'egg'
            },
            {
              name: 'soy sauce'
            },
            {
              name: 'spring roll pastry'
            },
            {
              name: 'flour'
            },
            {
              qty: '2',
              name: 'garlic'
            }
          ],
          instructions: [
            {
              instruction: 'Pan + oil + 1 onion + 2 garlic + 3 mushrooms + 3/4 mix veg → 1/2 cooked + remove'
            },
            {
              instruction: '1 chicken breast + 1 egg + salt + pepper + 2 inch gin- ger → mix'
            },
            {
              instruction: '+ pan → cooked + remove'
            },
            {
              instruction: 'Pan + prawns → cooked'
            },
            {
              instruction: '+ veg + 4 spring onions + chicken + soy sauce + sesa- me oil to taste → mix'
            },
            {
              instruction: '+ spring roll pastry + (flour + water) as glue → make spring rolls'
            }
          ],
          isLive: 'no'
        },

        {
          title: 'thai coconut-chili prawn skewers',
          cuisine: 'thai',
          serves: 4,
          type: 'starters',

          ingredients: [
            {
              name: 'prawns'
            },
            {
              qty: '2',
              unit: 'TBSP',
              name: 'brown sugar'
            }
          ],
          ingredients_2: [
            {
              title: 'paste'
            },
            {
              qty: '6',
              unit: 'cm',
              name: 'ginger'
            },
            {
              qty: '2',
              name: 'lemon grass'
            },
            {
              qty: '2',
              name: 'garlic'
            },
            {
              qty: '1',
              name: 'red chilli'
            },
            {
              qty: '1',
              name: 'lime + zest'
            },
            {
              qty: '3',
              unit: 'TBSP',
              name: 'soy sauce'
            },
            {
              name: 'coriander roots'
            },
            {
              qty: '100',
              unit: 'g',
              name: 'dried coconut'
            },
            {
              qty: '1',
              name: 'shallot'
            }
          ],
          instructions: [
            {
              instruction: 'Paste ingredients → blend'
            },
            {
              instruction: '+ prawns + fridge → 1 hour +'
            },
            {
              instruction: '+ skewers + grill → cooked'
            }
          ],
          isLive: 'no'
        },
        {
          title: 'sticky sticks',
          cuisine: 'chinese',
          serves: 4,
          type: 'starters',

          ingredients: [
            {
              qty: '8',
              name: 'chicken drumstick/wings'
            },
            {
              qty: '1',
              name: 'lemon'
            },
            {
              qty: '1/2',
              unit: 'tsp',
              name: 'ginger'
            },
            {
              qty: '6',
              unit: 'TBSP',
              name: 'honey'
            },
            {
              qty: '3',
              unit: 'TBSP',
              name: 'fish sauce'
            },
            {
              qty: '4',
              unit: 'tsp',
              name: 'soy sauce'
            },
            {
              qty: '4',
              unit: 'TBSP',
              name: 'rice wine vinegar'
            },
            {
              qty: '4',
              unit: 'tsp',
              name: 'seasme oil'
            },
            {
              qty: '1/2',
              unit: 'TBSP',
              name: 'brown sugar'
            },
            {
              qty: '1',
              unit: 'tsp',
              name: 'chilli flakes'
            }
          ],
          instructions: [
            {
              instruction: 'Oven 200°C'
            },
            {
              instruction: 'Chicken + salt + pepper + all ingredients + fridge → 30 min +'
            },
            {
              instruction: '+ oven reserving marinade → 15 min'
            },
            {
              instruction: '+ turn → 15 min'
            },
            {
              instruction: 'Marinade + medium-high heat → 10-15 min'
            },
            {
              instruction: '+ dip chicken → serve'
            }
          ],
          isLive: 'no'
        },


        {
          title: 'salt and pepper prawns',
          cuisine: 'chinese',
          serves: 2,
          type: 'starters',

          ingredients: [
            {
              qty: '450',
              unit: 'g',
              name: 'prawns'
            },
            {
              qty: '2',
              unit: 'TBSP',
              name: 'cornflour'
            },
            {
              qty: '1/2',
              unit: 'tsp',
              name: 'white pepper'
            },
            {
              qty: '1/2',
              unit: 'tsp',
              name: 'black pepper'
            },
            {
              qty: '1/2',
              unit: 'tsp',
              name: 'salt'
            },
            {
              qty: '2',
              name: 'garlic'
            },
            {
              qty: '1',
              name: 'green chilli'
            },
            {
              qty: '2',
              name: 'spring onions'
            }
          ],
          instructions: [
            {
              instruction: 'Pat prawns dry + bowl + 2 TBSP cornflour + 1/2 tsp white pepper + 1/2 tsp black pepper + 1/2 tsp salt → mix'
            },
            {
              instruction: 'Pan + oil + medium heat + 2 garlic + 1/2 green chili + 1 spring onion → crisp'
            },
            {
              instruction: '+ prawns → 1-2 min each side'
            },
            {
              instruction: '+ remove heat + 1/2 green chili + 1 spring onion + adjust seasoning → serve'
            }
          ],
          isLive: 'no'
        },
        {
          title: 'garlic bread',
          cuisine: 'italian',
          serves: 0,
          makes: '1 baguette',
          type: 'starters',

          ingredients: [
            {
              name: 'basil'
            },
            {
              qty: '2',
              name: 'garlic'
            },
            {
              name: 'baguette'
            },
            {
              qty: '1',
              unit: 'TBSP',
              name: 'mayonnaise'
            },
            {  qty: '2',
              unit: 'TBSP',
              name: 'butter'
            },
            {
              name: 'parsley'
            },
            {
              qty: '1/4' ,
              unit: 'cup',
              name: 'cheddar'
            },
            {
              qty: '1/8' ,
              unit: 'cup',
              name: '1/8 cup gorgonzola,/mozzarella/ parmesan'
            }
          ],
          instructions: [
            {
              instruction: '1 TBSP mayonnaise + 2 TBSP butter + 2 garlic → smooth'
            },
            {
              instruction: '+ basil + salt + pepper + Cheese (1/4 cup cheddar + 1/8 cup parmesan/blue cheese) + parsley → mix'
            },
            {
              instruction: '+ baguette + cut so bread stays whole + Mixture + foil + oven → 10-15 min, 15-20min from frozen'
            }
          ],
          isLive: 'no'}
      ]
    }
  ];
}
