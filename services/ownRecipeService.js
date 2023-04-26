const Recipe = require("../schemas/recipiesSchema");
const { getSingleRecipiesService } = require("./recipiesService");

const getOwnerRecipesService = async (_id, { skip, limit }) => {
  const count = await Recipe.find({ owner: _id }).count();
  const countPage = await Recipe.find({ owner: _id })
    .skip(skip)
    .limit(limit)
    .count();
  const recipes = await Recipe.find({ owner: _id })
    .select({
      _id: true,
      thumb: true,
      preview: true,
      title: true,
      description: true,
      time: true,
    })
    .skip(skip)
    .limit(limit);

  return { count, countPage, recipes };
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
    { ...body, thumb, owner: userId },
    { new: true }
  );
};

module.exports = {
  getOwnerRecipesService,
  postOwnerRecipesService,
  deleteOwnerRecipesService,
  patchOwnerRecipesService,
};
