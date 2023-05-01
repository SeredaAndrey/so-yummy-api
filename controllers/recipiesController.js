const { get } = require("mongoose");
const { FoundingError, ValidateError } = require("../middleware/errorHandler");
const {
  recipieInCategoryValidate,
  recipieQueryValidete,
} = require("../schemas/recipieValidate");

const {
  getCategoryListService,
  getSingleRecipiesService,
  getRecipesInCategoryService,
} = require("../services/recipiesService");

const getCategoryListController = async (req, res, next) => {
  let { categorys } = await getCategoryListService();
  categorys = categorys.sort((a, b) => a.localeCompare(b));
  if (categorys) {
    res.status(200).json({
      message: "getting category list success",
      code: 200,
      categories: categorys,
    });
  } else {
    throw new FoundingError("category list not found");
  }
};

const getMainPageRecipesController = async (req, res, next) => {
  const reqValidateQuery = recipieQueryValidete.validate(req.query);
  let { page = 1, limit = 4 } = req.query;
  limit = parseInt(limit);
  const skip = (parseInt(page) - 1) * limit;

  if (!reqValidateQuery.error) {
    const { categorys } = await getCategoryListService();

    let recipes = [];

    for (const category of categorys) {
      const recipe = await getRecipesInCategoryService(category, {
        skip,
        limit,
      });
      recipes = [...recipes, recipe];
    }

    res.status(200).json({
      message: "getting recipes for main page success",
      code: 200,
      recipes,
    });
  } else {
    throw new ValidateError(reqValidateQuery.error);
  }
};

const getRecipesInCategoryController = async (req, res, next) => {
  const reqValidateParams = recipieInCategoryValidate.validate(req.params);
  const reqValidateQuery = recipieQueryValidete.validate(req.query);
  let { page = 1, limit = 8 } = req.query;
  limit = parseInt(limit);
  const skip = (parseInt(page) - 1) * limit;

  if (!reqValidateParams.error) {
    if (!reqValidateQuery.error) {
      const { category } = req.params;

      const recipes = await getRecipesInCategoryService(capitalize(category), {
        skip,
        limit,
      });
      if (recipes) {
        return res.status(200).json({
          message: "getting recipes by category success",
          code: 200,
          category: recipes.category,
          data: recipes.recipes,
          count: recipes.count,
          countPage: recipes.countPage,
          page: page,
          limit: limit,
        });
      } else throw new FoundingError("Recipes not found");
    } else throw new ValidateError(reqValidateQuery.error);
  } else throw new ValidateError(reqValidateParams.error);
};

const capitalize = (str) => {
  const toLowerCaseCategory = str.toLowerCase();

  return toLowerCaseCategory.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

const getSingleRecipiesController = async (req, res, next) => {
  const { idResipie } = req.params;
  const recipie = await getSingleRecipiesService(idResipie);
  if (recipie) {
    res.status(200).json({
      message: "getting single recipie by id success",
      code: 200,
      data: recipie,
    });
  } else throw new FoundingError("Recipe not found");
};

module.exports = {
  getCategoryListController,
  getMainPageRecipesController,
  getRecipesInCategoryController,
  getSingleRecipiesController,
};
