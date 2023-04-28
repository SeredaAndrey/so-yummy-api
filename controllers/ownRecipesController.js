// const cloudinary = require("cloudinary").v2;

const {
  ValidateError,
  FoundingError,
  InternalError,
} = require("../middleware/errorHandler");
const {
  recipieQueryValidete,
  postRecipeValidate,
  patchRecipeValidate,
} = require("../schemas/recipieValidate");
const {
  getOwnerRecipesService,
  postOwnerRecipesService,
  deleteOwnerRecipesService,
  patchOwnerRecipesService,
} = require("../services/ownRecipeService");

const getOwnerRecipesController = async (req, res, next) => {
  const reqValidateQuery = recipieQueryValidete.validate(req.query);
  const _id = req.user._id;

  let { page = 1, limit = 4 } = req.query;

  limit = parseInt(limit);
  const skip = (parseInt(page) - 1) * limit;

  if (!reqValidateQuery.error) {
    const ownRecipes = await getOwnerRecipesService(_id, { skip, limit });
    if (ownRecipes) {
      res.status(200).json({
        message: "getting owner recipes is success",
        code: 200,
        data: ownRecipes.recipes,
        count: ownRecipes.count,
        countPage: ownRecipes.countPage,
        page: page,
        limit: limit,
      });
    } else throw new FoundingError("Recipes not found");
  } else throw new ValidateError(reqValidateQuery.error);
};

const postOwnerRecipesController = async (req, res, next) => {
  let thumb = "";
  if (req.file) {
    thumb = req.file.path;
  } else {
    thumb = null;
  }

  const reqValidate = postRecipeValidate.validate(req.body);
  const _id = req.user._id;
  const body = req.body;

  if (!reqValidate.error) {
    const recipe = await postOwnerRecipesService(_id, body, thumb);
    if (recipe) {
      res.status(201).json({
        message: "create recipe success",
        code: 200,
        recipe,
      });
    } else throw new InternalError("Internal error");
  } else throw new ValidateError(reqValidate.error);
};

const deleteOwnerRecipesController = async (req, res, next) => {
  const userId = req.user._id;
  const { idRecipes } = req.params;

  const data = await deleteOwnerRecipesService(userId, idRecipes);

  if (data) {
    res.status(200).json({
      message: "delete owner recipe success",
      code: 200,
      data,
    });
  } else throw new FoundingError("recipe not found");
};

const patchOwnerRecipesController = async (req, res, next) => {
  // const imageUrl350 = cloudinary.url(`${req.file.originalname}_350`, {
  //   secure: true,
  // });
  // const imageUrl700 = cloudinary.url(`${req.file.originalname}_700`, {
  //   secure: true,
  // });
  // console.log(imageUrl350, imageUrl700);
  let thumb = "";
  if (req.file) {
    thumb = req.file.path;
  } else {
    thumb = null;
  }
  const reqValidate = patchRecipeValidate.validate(req.body);
  const body = req.body;
  const userId = req.user._id;
  const { idRecipes } = req.params;

  if (!reqValidate.error) {
    const recipe = await patchOwnerRecipesService(
      userId,
      idRecipes,
      body,
      thumb
    );
    if (recipe) {
      res.status(200).json({
        message: "patch owner recipe success",
        code: 200,
        recipe,
      });
    } else throw new FoundingError("recipe not found");
  } else throw new ValidateError(reqValidate.error);
};

module.exports = {
  getOwnerRecipesController,
  postOwnerRecipesController,
  deleteOwnerRecipesController,
  patchOwnerRecipesController,
};
