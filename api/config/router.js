var express = require('express');
var router = express.Router();
var RecipeController = require('../controllers/Recipe.controller.js');

router.get('/api/recipes', RecipeController.getRecipes);
router.post('/api/recipes', RecipeController.createRecipe);

router.route('/api/recipes/:id')
  .get(RecipeController.getRecipe)
  .patch(RecipeController.updateRecipe)
  .delete(RecipeController.deleteRecipe);

module.exports = router;
