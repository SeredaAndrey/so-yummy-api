const Category = require("../schemas/categorySchema");
const Recipe = require("../schemas/recipiesSchema");

const getCategoryListService = async () => {
  return await Category.findOne({});
};

const getSingleRecipiesService = async (idResipie) => {
  return await Recipe.findOne({ _id: idResipie });
};

module.exports = { getCategoryListService, getSingleRecipiesService };
