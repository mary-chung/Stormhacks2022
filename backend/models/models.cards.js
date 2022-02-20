const mongoose = require('mongoose');
const st = require("../models/models.strategies");
const StrategySchema = st.StrategySchema

const Schema = mongoose.Schema;

const CardSchema = new Schema({
  card_ID: Number,
  card_title: String,
  notes: String,
  strategies: [StrategySchema]
});
 
const Card = mongoose.model('Card', CardSchema);
module.exports = {
  Card,
  CardSchema
}