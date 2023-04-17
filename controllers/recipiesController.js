const { FoundingError, ValidateError } = require("../middleware/errorHandler");
const {
  recipieInCategoryValidate,
  recipieInCategoryQueryValidete,
} = require("../schemas/recipieValidate");

const {
  getCategoryListService,
  getSingleRecipiesService,
  getRecipesInCategoryService,
} = require("../services/recipiesService");

const getCategoryListController = async (req, res, next) => {
  let { category } = await getCategoryListService();
  category = category.sort((a, b) => a.localeCompare(b));
  if (category) {
    res.status(200).json({
      message: "getting caegory list succes",
      code: 200,
      categorys: category,
    });
  } else {
    throw new FoundingError("category list not found");
  }
};

const getMainPageRecipesController = async (req, res, next) => {
  res.status(200).json({ message: "ok", code: 200 });
};

const getRecipesInCategoryController = async (req, res, next) => {
  const reqValidateParams = recipieInCategoryValidate.validate(req.params);
  const reqValidateQuery = recipieInCategoryQueryValidete.validate(req.query);
  let { page = 1, limit = 8 } = req.query;
  limit = parseInt(limit);
  const skip = (parseInt(page) - 1) * limit;

  if (!reqValidateParams.error) {
    if (!reqValidateQuery.error) {
      const { category } = req.params;
      const recipes = await getRecipesInCategoryService(category, {
        skip,
        limit,
      });
      if (recipes) {
        return res.status(200).json({
          message: "getting resipes by category succes",
          code: 200,
          data: recipes,
          page: page,
          limit: limit,
        });
      } else throw new FoundingError("Recipes not found");
    } else throw new ValidateError(reqValidateQuery.error);
  } else throw new ValidateError(reqValidateParams.error);
};

const getSingleRecipiesController = async (req, res, next) => {
  const { idResipie } = req.params;
  const recipie = await getSingleRecipiesService(idResipie);
  if (recipie) {
    res.status(200).json({
      message: "getting single recipie by id succes",
      code: 200,
      data: recipie,
    });
  } else throw new FoundingError("Recipie not found");
};

module.exports = {
  getCategoryListController,
  getMainPageRecipesController,
  getRecipesInCategoryController,
  getSingleRecipiesController,
};
