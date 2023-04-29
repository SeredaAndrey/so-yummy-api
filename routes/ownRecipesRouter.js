const express = require("express");

const uploadRecipePhotoCloud = require("../middleware/uploadRecipePhotoMiddlevare");

const { asyncWrapper } = require("../middleware/errorHandler");
const {
  getOwnerRecipesController,
  postOwnerRecipesController,
  deleteOwnerRecipesController,
  patchOwnerRecipesController,
} = require("../controllers/ownRecipesController");

const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(getOwnerRecipesController));
router.post(
  "/",
  uploadRecipePhotoCloud.single("image"),
  asyncWrapper(postOwnerRecipesController)
);
router.delete("/:idRecipes", asyncWrapper(deleteOwnerRecipesController));
router.patch(
  "/:idRecipes",
  uploadRecipePhotoCloud.single("image"),
  asyncWrapper(patchOwnerRecipesController)
);

module.exports = { ownRecipesRouter: router };
