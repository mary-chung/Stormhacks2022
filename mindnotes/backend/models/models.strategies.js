const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StrategySchema = new Schema({
  "strategy": String,
  "rating": Number
});
 
const Strategy = mongoose.model('Strategy', StrategySchema);
module.exports = {
  Strategy,
  StrategySchema
}