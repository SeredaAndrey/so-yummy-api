const express = require("express");

const { authMiddleware } = require("../middleware/authMiddleware");
const { asyncWrapper } = require("../middleware/errorHandler");

const {
  getCategoryListController,
  getMainPageRecipesController,
  getRecipesInCategoryController,
  getSingleRecipiesController,
} = require("../controllers/recipiesController");

const router = express.Router();

router.use(authMiddleware);

router.get("/category-list", asyncWrapper(getCategoryListController));
router.get("/main-page", asyncWrapper(getMainPageRecipesController));
router.get("/:category", asyncWrapper(getRecipesInCategoryController));
router.get("/:id", asyncWrapper(getSingleRecipiesController));

module.exports = { recipesRouter: router };
