var mongoose = require('mongoose');
var RecipeSchema = mongoose.Schema({

  title: {type: String, required: true},
  cuisine: {type: String},
  serves: {type: Number, required: true},
  makes: {type: String},
  type: {type: String, required: true},
  ingredients: {type: Object, required: true},
  ingredients_2: {type: Object},
  instructions: {type: Object, required: true},
  date: {type: Date, default: Date.now}
},{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Recipe', RecipeSchema);
