// var request = require('request');
var Recipe = require('../models/recipe.js');

function getRecipes(req, res) {
  Recipe.find({}, function(err, Recipe){
    if(err){
      console.log('could not get Recipe', err);
      res.status(500).send('could not get Recipe');
      return;
    }
    console.log(Recipe);
    res.json(Recipe);
  });
}
//
// function createPost(req, res) {
//   var recipe = new Recipe(req.body);
//   recipe.save(function(err) {
//     if(err) return res.json({message: 'Could not create recipe' + err});
//     res.json({recipe: recipe});
//     console.log('Could not create new recipe');
//   });
// }

// function getRecipe(req, res) {
//   var id = req.params.id;
//   Recipe.findById({_id: id}, function(err, recipe){
//     if(err) return res.json({message: 'could not find recipe b/c', err});
//     res.json({recipe: recipe});
//   }).select('-__v');
// }

// function deletePost(req, res) {
//   var id = req.params.id;
//   console.log('id', id);
//
//   Recipe.remove({_id: id}, function(err){
//     if(err) {
//       return res.json({message: 'could not delete recipe b/c' + err});
//     }
//     res.json({message: 'recipe successfully deleted'});
//   });
// }



module.exports = {
  // getRecipe: getRecipe,
  // createPost: createPost,
  getRecipes: getRecipes
  // deletePost: deletePost
};
