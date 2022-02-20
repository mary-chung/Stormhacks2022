const mongoose = require('mongoose');
const StrategySchema = require("../models/models.strategies");

const Schema = mongoose.Schema;

const CardSchema = new Schema({
  card_ID: Number,
  card_title: String,
  notes: String,
  strategies: [StrategySchema]
});
 
module.exports = mongoose.model('Card', CardSchema);
module.exports = CardSchema;