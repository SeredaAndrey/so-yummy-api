const Ingredient = require("../schemas/ingredientsSchema");
const Recipe = require("../schemas/recipiesSchema");

const getListIngredientsService = async () => {
  return await Ingredient.find({});
};

const getIngredientsService = async (ingredient) => {
  return await Ingredient.find(
    {
      $or: [
        { ttl: { $regex: ingredient.toLowerCase() } },
        { ttl: { $regex: capitalize(ingredient) } },
      ],
    },
    { ttl: true }
  );
};
const getRecipeService = async (id) => {
  return await Recipe.find({
    ingredients: {
      $elemMatch: {
        id: id,
      },
    },
  });
};

module.exports = {
  getListIngredientsService,
  getIngredientsService,
  getRecipeService,
};

const capitalize = (str) => {
  const toLowerCaseCategory = str.toLowerCase();

  return toLowerCaseCategory.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};
