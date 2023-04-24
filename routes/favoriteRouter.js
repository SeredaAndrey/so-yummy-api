const express = require("express");

const { asyncWrapper } = require("../middleware/errorHandler");
const { authMiddleware } = require("../middleware/authMiddleware");

const {
  getFavoriteRecipesController,
  patchFavoriteRecipesController,
} = require("../controllers/favoriteController");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(getFavoriteRecipesController));
router.patch("/:idRecipe", asyncWrapper(patchFavoriteRecipesController));

module.exports = { favoriteRouter: router };
