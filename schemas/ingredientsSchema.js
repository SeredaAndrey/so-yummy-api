const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredient = new Schema(
  {
    ttl: { type: String, required: true },
    desc: { type: String, required: true },
    t: { type: String, required: true },
    thb: { type: String, required: true },
  },
  { timestamps: true }
);

const Ingredient = mongoose.model("ingredients", ingredient);

module.exports = Ingredient;
