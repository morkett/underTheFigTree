// var request = require('request');
var Recipe = require('../models/recipe.model.js');

function getRecipes(req, res) {
  Recipe.find({}, function(err, Recipe){
    if(err){
      console.log('could not get Recipe', err);
      res.status(500).send('could not get Recipe');
      return;
    }
    res.json(Recipe);
  });
}

function createRecipe(req, res) {
  console.log(req.params);

  var recipe = new Recipe(req.body);
  if(req.file){
    recipe.img.push(req.file.key);
  }
  recipe.save(function(err) {
    if(err) return res.json({message: 'Could not create recipe' + err});
    res.json({recipe: recipe});
    console.log('Could not create new recipe');
  });
}

function getRecipe(req, res) {
  var id = req.params.id;
  Recipe.findById({_id: id}, function(err, recipe){
    if(err) return res.json({message: 'could not find recipe b/c', err});
    res.json({recipe: recipe});
  }).select('-__v');
}

function deleteRecipe(req, res) {
  var recipeId = req.params.id;

  Recipe.remove({_id: recipeId}, function(err){
    if(err) {
      res.json({message: 'could not delete recipe b/c:' + err});
    }
    res.json({message: 'recipe successfully delete'});

  });
}

function updateRecipe(req, res) {
  var id = req.params.id;

  Recipe.findById({_id: id}, function(err, recipe){
    if(err) return res.json({message: 'could not find recipe b/c:' + err});

    if(req.body.title) recipe.title = req.body.title;
    if(req.body.cuisine) recipe.cuisine = req.body.cuisine;
    if(req.body.serves) recipe.serves = req.body.serves;
    if(req.body.type) recipe.type = req.body.type;
    if(req.body.type2) recipe.type2 = req.body.type2;
    if(req.body.makes) recipe.makes = req.body.makes;
    if(req.body.notes) recipe.notes = req.body.notes;
    if(req.body.blurb) recipe.blurb = req.body.blurb;
    if(req.body.img) recipe.img = req.body.img;
    if(req.body.ingredients) recipe.ingredients = req.body.ingredients;
    if(req.body.ingredients_2_title) recipe.ingredients_2_title = req.body.ingredients_2_title;
    if(req.body.ingredients_2) recipe.ingredients_2 = req.body.ingredients_2;
    if(req.body.instructions) recipe.instructions = req.body.instructions;
    if(req.body.isLive) recipe.isLive = req.body.isLive;
    if(req.body.new) recipe.new = req.body.new;
    if(req.body.featured) recipe.featured = req.body.featured;


    recipe.save(function(err){
      if(err) return res.status(404).json({message: 'Could not update recipe b/c' + err});

      res.json({message: 'recipe successfully updated', recipe: recipe});
    });
  }).select('-__v');
}

function getRecipeByCuisine (req, res) {
  var cat = req && req.params && req.params.cat;
  if (!cat) return err.missingParams(res, ['cat']);

  Recipe.find({ cuisine: cat }, function (err, products) {
    if (err) return err.recordNotFound(res, err.message);
    res.json(products);
  });
}
function getRecipeByType (req, res) {
  var type = req && req.params && req.params.type;
  if (!type) return err.missingParams(res, ['type']);

  Recipe.find({ type: type }, function (err, products) {
    if (err) return err.recordNotFound(res, err.message);
    res.json(products);
  });
}

// function addIngredient (req, res) {
//   Recipe.findById(req.params.id, function (err, doc) {
//     doc.ingredients.push(req.body.ingredient);
//     doc.save(function (err) {
//       res.json(doc);
//     })
//   });
// }


module.exports = {
  getRecipe: getRecipe,
  createRecipe: createRecipe,
  getRecipes: getRecipes,
  deleteRecipe: deleteRecipe,
  updateRecipe: updateRecipe,
  getRecipeByCuisine: getRecipeByCuisine,
  getRecipeByType: getRecipeByType

};
