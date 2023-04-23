const { FoundingError } = require("../middleware/errorHandler");
const { searchRecipeValidate } = require("../schemas/searchValidate");

const {
  getListIngredientsService,
  getIngredientsService,
  getRecipeService,
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
    const ingredients = await getIngredientsService(ingredient);
    if (ingredients) {
      let recipes = [];
      for (const ingredient of ingredients) {
        const recipe = await getRecipeService(ingredient.id);
        recipes = [...recipes, recipe];
      }
      res.status(200).json({
        message: "getting search result success",
        code: 200,
        data: recipes,
      });
    } else throw new FoundingError("ingredient not found");
  } else throw new ValidateError(reqValidate.error);
};

module.exports = {
  getListIngredientsController,
  searchRecipesByIngredientsController,
};
