const Ingredient = require("../schemas/ingredientsSchema");
const Recipe = require("../schemas/recipiesSchema");

const getListIngredientsService = async () => {
  return await Ingredient.find({});
};

const getIngredientsService = async (ingredient) => {
  const ingredients = await Ingredient.find(
    {
      $or: [
        { ttl: { $regex: ingredient.toLowerCase() } },
        { ttl: { $regex: capitalize(ingredient) } },
      ],
    },
    { ttl: true }
  );
  return (ingredientsId = ingredients.map((ingredient) => {
    return ingredient.id;
  }));
};

const getRecipeService = async (ingredientsId, { skip, limit }) => {
  const count = await Recipe.find({
    ingredients: {
      $elemMatch: {
        id: ingredientsId,
      },
    },
  }).count();
  const countPage = await Recipe.find({
    ingredients: {
      $elemMatch: {
        id: ingredientsId,
      },
    },
  })
    .sort({ popularity: -1 })
    .skip(skip)
    .limit(limit)
    .count();
  const recipes = await Recipe.find({
    ingredients: {
      $elemMatch: {
        id: ingredientsId,
      },
    },
  })
    .sort({ popularity: -1 })
    .skip(skip)
    .limit(limit);
  return { count, countPage, recipes };
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
