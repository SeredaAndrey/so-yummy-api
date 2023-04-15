const getCategoryListController = async (req, res, next) => {
  res.status(200).json({ message: "ok", code: 200 });
};

const getMainPageRecipesController = async (req, res, next) => {
  res.status(200).json({ message: "ok", code: 200 });
};

const getRecipesInCategoryController = async (req, res, next) => {
  res.status(200).json({ message: "ok", code: 200 });
};

const getSingleRecipiesController = async (req, res, next) => {
  res.status(200).json({ message: "ok", code: 200 });
};

module.exports = {
  getCategoryListController,
  getMainPageRecipesController,
  getRecipesInCategoryController,
  getSingleRecipiesController,
};
