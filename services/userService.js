const date = require("date-and-time");

const Recipe = require("../schemas/recipiesSchema");
const User = require("../schemas/userSchema");

const getUserDataService = async (_id) => {
  return await User.findOne({ _id }, { password: 0, vCode: 0 });
};

const getUserInfoService = async (_id) => {
  const countRecipeAddingToFavorite = await Recipe.find({
    favorites: {
      $in: { _id },
    },
  }).count();

  const countRecipeAddingToPortal = await Recipe.find({
    owner: _id,
  }).count();

  const { createdAt } = await User.findOne({ _id });
  const timeNow = new Date();
  const dayInPortal = parseInt((timeNow - createdAt) / 1000 / 60 / 60 / 24);

  return {
    countToFavorite: countRecipeAddingToFavorite,
    countUserRecipe: countRecipeAddingToPortal,
    dayInPortal,
  };
};

const patchUserDataService = async (_id, body, avatarUrl) => {
  const { name } = body;
  const result = await getUserDataService(_id);
  if (!result) {
    return;
  }
  if (!avatarUrl) {
    avatarUrl = result.avatarUrl;
  }
  const user = await User.findOneAndUpdate(
    { _id, loggedIn: true },
    { name, avatarUrl },
    { new: true }
  );
  if (user) {
    return await User.findOne({ _id }, { password: 0, vCode: 0 });
  }
};

module.exports = {
  getUserDataService,
  getUserInfoService,
  patchUserDataService,
};
