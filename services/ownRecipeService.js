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
  const title = body.title || result.title;
  const category = body.category || result.category;
  const area = body.area || result.area;
  const instructions = body.instructions || result.instructions;
  const description = body.description || result.description;
  const time = body.time || result.time;
  const youtube = body.youtube || result.youtube;
  const tags = body.tags || result.tags;

  console.log(title);

  if (!thumb) {
    thumb = result.thumb;
  }
  return await Recipe.findOneAndUpdate(
    { _id: idRecipes },
    {
      title,
      category,
      area,
      instructions,
      description,
      time,
      youtube,
      tags,
      thumb,
    },
    { new: true }
  );
};

module.exports = {
  getOwnerRecipesService,
  postOwnerRecipesService,
  deleteOwnerRecipesService,
  patchOwnerRecipesService,
};
