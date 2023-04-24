const Recipe = require("../schemas/recipiesSchema");

const getFavoriteRecipesService = async (_id, { skip, limit }) => {
  const count = await Recipe.find({
    favorites: {
      $in: { _id },
    },
  }).count();
  const countPage = await Recipe.find({
    favorites: {
      $in: { _id },
    },
  })
    .sort({ popularity: -1 })
    .skip(skip)
    .limit(limit)
    .count();
  const recipes = await Recipe.find({
    favorites: {
      $in: { _id },
    },
  })
    .sort({ popularity: -1 })
    .skip(skip)
    .limit(limit);
  return { count, countPage, recipes };
};

const patchFavoriteRecipesService = async (idRecipe, _id) => {
  const recipe = await Recipe.findOne({
    _id: idRecipe,
    favorites: {
      $in: { _id },
    },
  });
  if (recipe !== null) {
    const result = await deleteFromFavoriteRecipeService(idRecipe, _id);
    return { data: result, message: "delete from favorite success" };
  } else {
    const result = await addToFavoriteRecipeService(idRecipe, _id);
    return { data: result, message: "add to favorite success" };
  }
};

const addToFavoriteRecipeService = async (idRecipe, _id) => {
  return await Recipe.findByIdAndUpdate(
    idRecipe,
    {
      $addToSet: { favorites: _id },
    },
    { new: true }
  );
};

const deleteFromFavoriteRecipeService = async (idRecipe, _id) => {
  return await Recipe.findByIdAndUpdate(
    idRecipe,
    {
      $pull: { favorites: _id },
    },
    { new: true }
  );
};

module.exports = { getFavoriteRecipesService, patchFavoriteRecipesService };
