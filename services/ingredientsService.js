const Ingredient = require("../schemas/ingredientsSchema");

const getListIngredientsService = async () => {
  return await Ingredient.find({});
};

module.exports = { getListIngredientsService };
