const Category = require("../schemas/categorySchema");
const Recipe = require("../schemas/recipiesSchema");

const getCategoryListService = async () => {
  return await Category.findOne({});
};

const getSingleRecipiesService = async (idResipie) => {
  return await Recipe.findOne({ _id: idResipie });
};

const getRecipesInCategoryService = async (category, { skip, limit }) => {
  return await Recipe.find({ category }).skip(skip).limit(limit);
};

module.exports = {
  getCategoryListService,
  getSingleRecipiesService,
  getRecipesInCategoryService,
};
