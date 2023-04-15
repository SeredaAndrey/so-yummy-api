const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipe = new Schema(
  {
    title: { tipe: String },
    category: { tipe: String },
    area: { tipe: String },
    instructions: { tipe: String },
    description: { tipe: String },
    thumb: { tipe: String },
    preview: { tipe: String },
    time: { tipe: String },
    popularity: { tipe: String },
    favorites: [],
    likes: [],
    youtube: { tipe: String },
    tags: [String],
    ingredients: [],
  },
  { timestamps: true }
);

const Recipe = mongoose.model("recipes", recipe);

module.exports = Recipe;
