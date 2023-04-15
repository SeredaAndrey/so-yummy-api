const { FoundingError } = require("../middleware/errorHandler");

const {
  getCategoryListService,
  getSingleRecipiesService,
} = require("../services/recipiesService");

const getCategoryListController = async (req, res, next) => {
  const data = await getCategoryListService();
  if (data) {
    res
      .status(200)
      .json({ message: "getting caegory list succes", code: 200, data });
  } else {
    throw new FoundingError("category list not found");
  }
};

const getMainPageRecipesController = async (req, res, next) => {
  res.status(200).json({ message: "ok", code: 200 });
};

const getRecipesInCategoryController = async (req, res, next) => {
  res.status(200).json({ message: "ok", code: 200 });
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
