const express = require("express");

const { asyncWrapper } = require("../middleware/errorHandler");
const {
  getOwnerRecipesController,
  postOwnerRecipesController,
  deleteOwnerRecipesController,
  patchOwnerRecipesController,
} = require("../controllers/ownRecipesController");

const router = express.Router();

router.get("/", asyncWrapper(getOwnerRecipesController));
router.post("/", asyncWrapper(postOwnerRecipesController));
router.delete("/:idRecipes", asyncWrapper(deleteOwnerRecipesController));
router.patch("/:idRecipes", asyncWrapper(patchOwnerRecipesController));

module.exports = { ownRecipesRouter: router };
