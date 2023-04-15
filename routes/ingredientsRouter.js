const express = require("express");

const { authMiddleware } = require("../middleware/authMiddleware");
const { asyncWrapper } = require("../middleware/errorHandler");

const {
  getListIngredientsController,
  searchRecipesByIngredientsController,
} = require("../controllers/ingredientsController");

const router = express.Router();

router.use(authMiddleware);

router.get("/list", asyncWrapper(getListIngredientsController));
router.get("/", asyncWrapper(searchRecipesByIngredientsController));

module.exports = {
  ingredientsRouter: router,
};
