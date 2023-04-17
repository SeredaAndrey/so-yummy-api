const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipe = new Schema(
  {
    title: { type: String },
    category: { type: String },
    area: { type: String },
    instructions: { type: String },
    description: { type: String },
    thumb: { type: String },
    preview: { type: String },
    time: { type: String },
    popularity: { type: String },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    youtube: { type: String },
    tags: [String],
    ingredients: [],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "user", default: null },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("recipes", recipe);

module.exports = Recipe;
