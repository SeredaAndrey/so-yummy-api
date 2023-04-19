const Recipe = require("../schemas/recipiesSchema");
const { getSingleRecipiesService } = require("./recipiesService");

const getOwnerRecipesService = async (_id, { skip, limit }) => {
  return await Recipe.find({ owner: _id })
    .select({ _id: 1, thumb: 1, preview: 1, title: 1, description: 1 })
    .skip(skip)
    .limit(limit);
};

const postOwnerRecipesService = async (_id, body, thumb) => {
  return await Recipe.create({ ...body, owner: _id, thumb });
};

const deleteOwnerRecipesService = async (userId, idRecipes) => {
  return await Recipe.findOneAndRemove({ _id: idRecipes, owner: userId });
};

const patchOwnerRecipesService = async (userId, idRecipes, body, thumb) => {
  const result = await getSingleRecipiesService(idRecipes);
  if (!result) {
    return;
  }
  if (!thumb) {
    thumb = result.thumb;
  }
  return await Recipe.findOneAndUpdate(
    { _id: idRecipes },
    { ...body, thumb },
    { new: true }
  );
};

module.exports = {
  getOwnerRecipesService,
  postOwnerRecipesService,
  deleteOwnerRecipesService,
  patchOwnerRecipesService,
};
