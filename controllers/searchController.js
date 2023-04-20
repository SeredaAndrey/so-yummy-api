const { ValidateError, FoundingError } = require("../middleware/errorHandler");
const { searchRecipeValidate } = require("../schemas/searchValidate");
const {
  getResponseSearchRecipeByTitleService,
} = require("../services/searchService");

const getSearchController = async (req, res, next) => {
  const reqValidate = searchRecipeValidate.validate(req.query);

  let { title, page = 1, limit = 12 } = req.query;
  limit = parseInt(limit);
  const skip = (parseInt(page) - 1) * limit;

  if (!reqValidate.error) {
    const recipes = await getResponseSearchRecipeByTitleService(title, {
      skip,
      limit,
    });
    if (recipes) {
      res.status(200).json({
        message: `getting recipes by querry <${title}> is success`,
        code: 200,
        data: recipes.recipes,
        count: recipes.count,
        countPage: recipes.countPage,
        page: page,
        limit: limit,
      });
    } else throw new FoundingError("Recipes not found");
  } else throw new ValidateError(reqValidate.error);
};

module.exports = { getSearchController };
