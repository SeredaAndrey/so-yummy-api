const Category = require("../schemas/categorySchema");
const Recipe = require("../schemas/recipiesSchema");

const getCategoryListService = async () => {
  return await Category.findOne({});
};

const getSingleRecipiesService = async (idResipie) => {
  return await Recipe.findOne({ _id: idResipie });
};

const getRecipesInCategoryService = async (category, { skip, limit }) => {
  const result = await Recipe.find({ category })
    .select({ _id: 1, thumb: 1, preview: 1, title: 1, category: 1, time: 1 })
    .skip(skip)
    .limit(limit);
  return { category, recipes: result };
};

module.exports = {
  getCategoryListService,
  getSingleRecipiesService,
  getRecipesInCategoryService,
};
