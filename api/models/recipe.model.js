var mongoose = require('mongoose');
var RecipeSchema = mongoose.Schema({

  title: {type: String, required: true},
  cuisine: {type: String, required: true},
  serves: {type: String, required: true},
  type: {type: String, required: true},
  ingredients: {type: Array, required: true},
  ingredients_2: {type: String},
  instructions: {type: Array, required: true},
  date: {type: Date, required: true, default: Date.now}
},{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Recipe', RecipeSchema);
