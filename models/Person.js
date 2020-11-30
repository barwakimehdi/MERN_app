const mongoose = require("mongoose");

const schema = mongoose.Schema;

const personSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },

  favoriteFoods: [String],
});

module.exports = Person = mongoose.model("person", personSchema);
