const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipe = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    area: { type: String, default: null },
    instructions: { type: String, required: true },
    description: { type: String, required: true },
    thumb: { type: String, default: null },
    preview: { type: String, default: null },
    time: { type: String, required: true },
    popularity: { type: Number, default: null },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    youtube: { type: String, default: null },
    tags: [{ type: String, default: null }],
    ingredients: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ingredient",
          default: null,
        },
        measure: { type: String, default: null },
      },
    ],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "user", default: null },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("recipes", recipe);

module.exports = Recipe;
