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
            {
              quantity: '1',
              unit: '',
              name: 'red chili'},
            {
              quantity: '2',
              unit: '',
              name: 'garlic'},
            {
              quantity: '1',
              unit: 'TBSP',
              name: 'ginger'},
            {
              quantity: '1/2',
              unit: '',
              name: 'lime'},
            {
              quantity: '1',
              unit: 'TBSP',
              name: 'sugar'},
            {
              quantity: '3',
              unit: 'TBSP',
              name: 'soy sauce'},
            {
              quantity: '2',
              unit: 'TBSP',
              name: 'oyster sauce'},
            {
              quantity: '1',
              unit: 'TBSP',
              name: 'fish sauce'},
            {
              quantity: '2',
              unit: 'TBSP',
              name: 'ketchup'},
            {
              quantity: '3',
              unit: 'tsp',
              name: 'pepper'}       
          ],
          isLive: 'no'
        }
      ]
    }
  ];
}










//
//   var data = [
//     {
//       'model': 'Recipe',
//       'documents': [
//         {
//           title: 'Green Beans With Toasted Mustard and Garlic',
//           cuisine: 'indian',
//           serves: 4,
//           type: 'sides',
//           ingredients: [
//             '450g green beans - chopped',
//             '4 garlic',
//             '1 TBSP butter',
//             '3/4 tsp mustard seeds',
//             '1/2 tsp chili flakes'
//           ],
//           instructions:
//           [
//             'Pan + oil + 1 TBSP butter + medium heat + 3/4 tsp mustard seeds → pops',
//             '↓ low heat + 4 garlic + 450g green beans + 3/4 tsp chili flakes + salt + cover → 20 min/cooked'
//           ],
//           ingredients_2: [],
//           isLive: 'no'
//         },
//
//
//
//         {
//           title: 'Cambodian Marinated Beef (Beef Lok Lak)',
//           cuisine: 'cambodian',
//           serves: 2,
//           type: 'beef',
//
//           ingredients: [
//             '500g beef steak thinly cut',
//             '1 onion',
//             'Mix veg (optional)',
//             '1/2 lime'
//           ],
//           instructions: [
//             '500g beef steak + marinade ingredients → 20 min',
//             'Wok + oil + 1 onion + mix veg → soft’, beef → 2-3 min',
//             'coriander + 1/2 lime → serve'
//           ],
//           ingredients_2: [
//             '1 red chili',
//             '2 garlic',
//             '1 TBSP ginger',
//             '1/2 lime',
//             '1 TBSP sugar',
//             '3 TBSP soy sauce',
//             '2 TBSP oyster sauce',
//             '1 TBSP fish sauce',
//             '2 TBSP ketchup',
//             '3 tsp pepper'
//           ],
//           isLive: 'no'
//         },
//
//
//         {
//           title: 'Grilled Lamb Kebabs (mutton tikka)',
//           cuisine: '',
//           serves: 4,
//           type: 'starters',
//
//           ingredients: [
//             '3 TBSP oil',
//             '1 TBSP',
//             '2 garlic',
//             '3/4 tsp cayenne',
//             '1 tsp paprika',
//             '1/2 tsp garam masala',
//             '1 tsp salt',
//             '560g lamb'
//           ],
//           instructions: [
//             '500g beef steak + marinade ingredients → 20 min',
//             'Wok + oil + 1 onion + mix veg → soft’, beef → 2-3 min',
//             'coriander + 1/2 lime → serve'
//           ],
//           ingredients_2: [],
//
//           isLive: 'no'
//         },
//
//
//         {
//           title: 'onion bhajiyas',
//           cuisine: 'indian',
//           serves: 4,
//           type: 'starters',
//
//           ingredients: [
//             '2 onions',
//             '1 inch giner',
//             '2 garlic',
//             '2 TBSP coriander leaves',
//             '1/2 tsp chilli',
//             '2 tsp cumin',
//             '1 tsp turmeric',
//             '1 tsp coriander',
//             'gram flour',
//             '1 tsp baking powder'
//           ],
//           instructions: [
//             'inst 1',
//             'inst 2'
//           ],
//           ingredients_2: [],
//
//           isLive: 'no'
//         },
//
//
//         {
//           title: 'mums chana masala',
//           cuisine: 'indian',
//           serves: 4,
//           type: 'starters',
//
//           ingredients: [
//             '1 large onion',
//             '3 tomatoes',
//             '1 potatoe',
//             'coriander',
//             '2 garlic',
//             'lemon',
//             '1 red onion',
//             '1 tsp mustard seeds',
//             'curry leaves (optional)',
//             '1 tsp chilli',
//             '1 tsp turmeric',
//             '1 tsp coriander',
//             '3 TBSP tamarind',
//             '1 can chickpeas/ black chickpeas',
//             '1/2 tsp garam masala',
//             'yoghurt'
//           ],
//           instructions: [
//             'Pan + oil + medium heat + 1 large onion + 1 tsp mustard seeds + curry leaves → soft',
//             '+ 4 tomatoes + 2 garlic + 1 tsp cumin + 1 tsp chili + 1 tsp turmeric + 1 tsp', 'coriander + 1 potato + 2 TBSP tamarind + salt + enough water→ simmer until cooked',
//             '+ 1 can chickpeas → 10 min',
//             '+ coriander + 1/4 tsp garam masala + lemon → serve with 1 red onion + yoghurt'
//           ],
//           ingredients_2: [],
//
//           isLive: 'no'
//         },
//
//
//         {
//           title: 'chicken florentine puffs',
//           cuisine: 'english',
//           serves: 4,
//           type: 'starters',
//
//           ingredients: [
//             '1 egg',
//             'puff pastry'
//           ],
//           ingredients_2: [
//             'filling',
//             '2 cooked chicken breasts',
//             '1/2 pack spinach, liquid squeezed',
//             '2 TBSP basil leaves',
//             '1-2 roasted red pepper',
//             '4 TBSP cream cheese',
//             '1/2 cup mozzarella/cheddar',
//             '1/4 cup grutere/parmesan cheese',
//             '1/8 tsp garlic powder',
//             '1/8 tsp salt',
//             '1/8 tsp pepper'
//           ],
//           instructions: [
//             'oven 200°C',
//             'all filling ingredients → mix',
//             'Puff pastry + filling + (1 egg + 1 TBSP water → beat) + oven → 15-18 min'
//           ],
//           isLive: 'no'
//         },
//
//         {
//           title: 'mum\'s spring rolls',
//           cuisine: 'chinese',
//           serves: 0,
//           makes: '30',
//           type: 'starters',
//           ingredients: [
//             '1 chicken breast thinly sliced',
//             '2 handful of prawns chopped',
//             '1 onion chopped',
//             '2 mushrooms chopped',
//             '3/4 pack mix veg chopped',
//             '2 inch ginger',
//             '3 spring onions',
//             '1 egg',
//             'soy sauce',
//             'spring roll pastry',
//             'flour',
//             '2 garlic'
//           ],
//           instructions: [
//             'Pan + oil + 1 onion + 2 garlic + 3 mushrooms + 3/4 mix veg → 1/2 cooked + remove',
//             '1 chicken breast + 1 egg + salt + pepper + 2 inch gin- ger → mix',
//             '+ pan → cooked + remove',
//             'Pan + prawns → cooked',
//             '+ veg + 4 spring onions + chicken + soy sauce + sesa- me oil to taste → mix',
//             '+ spring roll pastry + (flour + water) as glue → make spring rolls'
//           ],
//           isLive: 'no'
//         },
//
//         {
//           title: 'thai coconut-chili prawn skewers',
//           cuisine: 'thai',
//           serves: 4,
//           type: 'starters',
//
//           ingredients: [
//             'prawns',
//             '2 TBSP brown sugar'
//           ],
//           ingredients_2: [
//             'paste',
//             '6cm ginger',
//             '2 lemon grass',
//             '2 garlic',
//             '1 red chili',
//             '1 lime + zest',
//             '3 TBSP soy sauce',
//             'coriander roots',
//             '100g / 6 tbsp dried coconut',
//             '1 shallot'
//           ],
//           instructions: [
//             'Paste ingredients → blend',
//             '+ prawns + fridge → 1 hour +',
//             '+ skewers + grill → cooked'
//           ],
//           isLive: 'no'
//         },
//
//         {
//           title: 'sticky sticks',
//           cuisine: 'chinese',
//           serves: 4,
//           type: 'starters',
//
//           ingredients: [
//             '8 chicken drumstick/wings',
//             '1 lemon',
//             '1/2 tsp ginger',
//             '6 TBSP honey',
//             '3 TBSP fish sauce',
//             '4 tsp soy sauce',
//             '4 TBSP rice wine vinegar',
//             '4 tsp sesame oil',
//             '1/2 TBSP brown sugar',
//             '1 tsp chilli flakes'
//           ],
//           instructions: [
//             'Oven 200°C',
//             'Chicken + salt + pepper + all ingredients + fridge → 30 min +',
//             '+ oven reserving marinade → 15 min',
//             '+ turn → 15 min',
//             'Marinade + medium-high heat → 10-15 min',
//             '+ dip chicken → serve'
//           ],
//           isLive: 'no'
//         },
//         {
//           title: 'salt and pepper prawns',
//           cuisine: 'chinese',
//           serves: 2,
//           type: 'starters',
//
//           ingredients: [
//             '450g prawns',
//             '2 TBSP cornflour',
//             '1/2 tsp white pepper',
//             '1/2 tsp black pepper',
//             '1/2 tsp salt',
//             '2 garlic',
//             '1 green chili',
//             '2 spring onions'
//           ],
//           instructions: [
//             'Pat prawns dry + bowl + 2 TBSP cornflour + 1/2 tsp white pepper + 1/2 tsp black pepper + 1/2 tsp salt → mix',
//             'Pan + oil + medium heat + 2 garlic + 1/2 green chili + 1 spring onion → crisp',
//             '+ prawns → 1-2 min each side',
//             '+ remove heat + 1/2 green chili + 1 spring onion + adjust seasoning → serve'
//           ],
//           isLive: 'no'
//         },
//         {
//           title: 'garlic bread',
//           cuisine: 'italian',
//           serves: 0,
//           makes: '1 baguette',
//           type: 'starters',
//
//           ingredients: [
//             'basil',
//             '2 garlic',
//             'baguette',
//             '1 TBSP mayonnaise',
//             '2 TBSP butter',
//             'parsley',
//             '1/4 cup cheddar',
//             '1/8 cup gorgonzola,/mozzarella/ parmesan'
//           ],
//           instructions: [
//             '1 TBSP mayonnaise + 2 TBSP butter + 2 garlic → smooth',
//             '+ basil + salt + pepper + Cheese (1/4 cup cheddar + 1/8 cup parmesan/blue cheese) + parsley → mix',
//             '+ baguette + cut so bread stays whole + Mixture + foil + oven → 10-15 min, 15-20min from frozen'
//           ],
//           isLive: 'no'}
//       ]
//     }
//   ];
// }
