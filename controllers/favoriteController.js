const { FoundingError } = require("../middleware/errorHandler");
const { searchRecipeValidate } = require("../schemas/searchValidate");
const {
  patchFavoriteRecipesService,
  getFavoriteRecipesService,
} = require("../services/favoriteService");

const getFavoriteRecipesController = async (req, res, next) => {
  const reqValidate = searchRecipeValidate.validate(req.require);
  const _id = req.user._id;

  let { page = 1, limit = 12 } = req.query;
  limit = parseInt(limit);
  const skip = (parseInt(page) - 1) * limit;

  if (!reqValidate.error) {
    const result = await getFavoriteRecipesService(_id, { skip, limit });
    if (result) {
      res.status(200).json({
        message: "getting recipe favorite is success",
        code: 200,
        data: result,
      });
    } else throw new FoundingError("recipe not found");
  } else throw new ValidateError(reqValidate.error);
};

const patchFavoriteRecipesController = async (req, res, next) => {
  const _id = req.user._id;
  const { idRecipe } = req.params;
  const recipe = await patchFavoriteRecipesService(idRecipe, _id);
  if (recipe) {
    res.status(200).json({
      message: recipe.message,
      code: 200,
      data: recipe.data,
    });
  } else {
    throw new FoundingError("recipe not found");
  }
};

module.exports = {
  getFavoriteRecipesController,
  patchFavoriteRecipesController,
};
