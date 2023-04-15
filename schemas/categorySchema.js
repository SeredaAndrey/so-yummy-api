const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const category = new Schema({
  category: [String],
});

const Category = mongoose.model("categorys", category);

module.exports = Category;
