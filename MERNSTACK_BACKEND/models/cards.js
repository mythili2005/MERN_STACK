var mongodb = require('mongoose');

var cardSchema = mongodb.Schema({
    question: String,
    answer: String
})

var card_schema = mongodb.model("pets",cardSchema);

module.exports = card_schema;