const express = require("express");

const { asyncWrapper } = require("../middleware/errorHandler");
const { authMiddleware } = require("../middleware/authMiddleware");

const {
  getShoppingListController,
  addShoppingListController,
  patchShoppingListController,
} = require("../controllers/shoppingListController");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(getShoppingListController));
router.post("/", asyncWrapper(addShoppingListController));
router.patch("/:idIngredientSL", asyncWrapper(patchShoppingListController));

module.exports = { shoppingListRouter: router };
