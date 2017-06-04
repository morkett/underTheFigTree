var mongoose = require('mongoose');
var RecipeSchema = mongoose.Schema({

  title: {type: String, required: true},
  publicText: {type: String},
  cuisine: {type: String},
  serves: {type: Number, required: true},
  makes: {type: String},
  type: {type: String, required: true},
  type2: {type: String},
  ingredients: {type: Array, required: true},
  ingredients_2: {type: Array},
  instructions: {type: Array, required: true},
  notes: {type: String},
  isLive: {type: String, default: 'no', required: true}
},{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Recipe', RecipeSchema);
