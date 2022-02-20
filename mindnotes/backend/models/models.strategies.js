const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StrategySchema = new Schema({
  "strategy": String,
  "rating": Number
});
 
module.exports = mongoose.model('Strategy', StrategySchema);
module.exports = StrategySchema;