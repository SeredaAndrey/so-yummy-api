const Category = require("../schemas/categorySchema");
const Recipe = require("../schemas/recipiesSchema");

const getCategoryListService = async () => {
  return await Category.findOne({});
};

const getSingleRecipiesService = async (idResipie) => {
  return await Recipe.findOne({ _id: idResipie });
};

const getRecipesInCategoryService = async (category, { skip, limit }) => {
  const result = await Recipe.find({ category }).skip(skip).limit(limit);
  return { category, recipes: result };
};

module.exports = {
  getCategoryListService,
  getSingleRecipiesService,
  getRecipesInCategoryService,
};
