var mongoose = require('mongoose');
var RecipeSchema = mongoose.Schema({

  title: {type: String, required: true},
  publicText: {type: String},
  cuisine: {type: String},
  serves: {type: Number, required: true},
  makes: {type: String},
  type: {type: String, required: true},
  type2: {type: String},
  ingredients: [{
    _id: false,
    qty: {type: String},
    unit: {type: String},
    name: {type: String, required: true}
  }],
  ingredients_2: [{
    _id: false,
    title: {type: String},
    qty: {type: String},
    unit: {type: String},
    name: {type: String}
  }],
  instructions: [{
    _id: false,
    instruction: {type: String}
  }],
  notes: {type: String},
  isLive: {type: String, default: 'no', required: true}
},{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Recipe', RecipeSchema);
