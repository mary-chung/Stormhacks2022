const mongoose = require("mongoose");
const CardSchema = require("../models/models.cards");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_ID: { type: String, unique: true },
    cards: [CardSchema],
});

module.exports = mongoose.model('User', UserSchema);