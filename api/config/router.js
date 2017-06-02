var express = require('express');
var router = express.Router();
var RecipeController = require('../controllers/Recipe.controller.js');

router.get('/api/recipes', RecipeController.getRecipes);
// router.post('/api/recipes', RecipeController.createPost);

// router.route('/api/recipes/:id')
//   .get(RecipeController.getPost)
//   .delete(RecipeController.deletePost);
// router.delete('/api/Recipe/delete', RecipeController.deletePost);

module.exports = router;
