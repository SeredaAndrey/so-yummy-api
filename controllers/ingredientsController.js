const { FoundingError } = require("../middleware/errorHandler");
const { searchRecipeValidate } = require("../schemas/searchValidate");

const {
  getListIngredientsService,
  getIngredientsService,
} = require("../services/ingredientsService");

const getListIngredientsController = async (req, res, next) => {
  const ingredients = await getListIngredientsService();
  if (ingredients) {
    res.status(200).json({
      message: "getting ingredients list success",
      code: 200,
      data: ingredients,
    });
  } else throw new FoundingError("ingredients list not found");
};

const searchRecipesByIngredientsController = async (req, res, next) => {
  const reqValidate = searchRecipeValidate.validate(req.require);
  console.log(req.query);

  let { ingredient, page = 1, limit = 12 } = req.query;
  limit = parseInt(limit);
  const skip = (parseInt(page) - 1) * limit;

  if (!reqValidate.error) {
    const ingredient = await getIngredientsService(ingredient);
    if (ingredient) {
    } else throw new FoundingError("ingredient not found");
  } else throw new ValidateError(reqValidate.error);
};

module.exports = {
  getListIngredientsController,
  searchRecipesByIngredientsController,
};
