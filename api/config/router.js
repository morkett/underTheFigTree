var express = require('express');
var router = express.Router();
var RecipeController = require('../controllers/Recipe.controller.js');
var s3Controller = require('../controllers/s3Controller.js');


var multer = require('multer');
var s3 = require('multer-s3');
var uuid = require('uuid');
var AWS = require('aws-sdk');


AWS.config.update({
  accessKeyId: 'AKIAJWO72TFEUELFKUBA',
  secretAccessKey: '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'
});

var conf = new AWS.S3();
var upload = multer({
  storage: s3({
    s3: conf,
    bucket: 'under-the-fig-tree',
    acl: 'public-read',
    secretAccessKey: 'tAMVlBXjX++GHk+x8xB14zqCNomI4e1+JtPFP1L0',
    accessKeyId: 'AKIAJWO72TFEUELFKUBA',
    region: 'US Standard',
    contentType: function(req, file, next) {
      next(null, file.mimetype);
    }
  })
});
router.get('/api/recipes', RecipeController.getRecipes);
router.post('/api/recipes', RecipeController.createRecipe);

router.route('/api/recipes/:id')
  .get(RecipeController.getRecipe)
  .put(RecipeController.updateRecipe)
  .delete(RecipeController.deleteRecipe);

router.route('/api/cuisine/:cat')
    .get(RecipeController.getRecipeByCuisine);

router.route('/api/type/:type')
        .get(RecipeController.getRecipeByType);

router.route('/upload/single/')
          .post(upload.single('file'), s3Controller.uploadSingle);

module.exports = router;
