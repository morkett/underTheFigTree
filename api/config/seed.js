var Recipe = require('../models/recipe.js');

var x = new Recipe({
  'title': 'Food For Niall',
  'cuisine': 'British',
  'serves': '4',
  'type': 'dinner',
  'ingredients': [
    'shit','cheese','beans'
  ],
  'instructions': [
    'put beans on toast',
    'sprinkle cheese']
});

x.save(function  (err) {
  console.log(err);
});
