const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shoppingList = new Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "user", default: null },
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
  },
  { timestamps: true }
);

const ShopingList = mongoose.model("shoppingLists", shoppingList);

module.exports = ShopingList;
