const mongoose = require("mongoose");
const c = require("../models/models.cards");
const CardSchema = c.CardSchema

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_ID: { type: Number, unique: true },
    cards: [CardSchema],
});

module.exports = mongoose.model('User', UserSchema);