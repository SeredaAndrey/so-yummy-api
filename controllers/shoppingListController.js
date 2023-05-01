const { FoundingError, ValidateError } = require("../middleware/errorHandler");
const { shopingListValidate } = require("../schemas/shopingListValidate");
const {
  addShoppingListService,
  getShoppingListService,
  patchShoppingListService,
} = require("../services/shoppingListService");

const getShoppingListController = async (req, res, next) => {
  const userId = req.user._id;

  const shoppingList = await getShoppingListService(userId);

  if (shoppingList) {
    res.status(200).json({
      message: "getting shopping list success",
      code: 200,
      data: shoppingList,
    });
  } else throw new FoundingError("Shopping list not found");
};

const addShoppingListController = async (req, res, next) => {
  const reqValidate = shopingListValidate.validate(req.body);

  const userId = req.user._id;
  const body = req.body;

  if (!reqValidate.error) {
    const shoppingList = await addShoppingListService(userId, body);

    if (shoppingList) {
      res.status(200).json({
        message: "add to shopping list success",
        code: 200,
        data: shoppingList,
      });
    } else throw new FoundingError("Shopping list not found");
  } else throw new ValidateError(reqValidate.error);
};

const patchShoppingListController = async (req, res, next) => {
  const { idIngredientSL } = req.params;
  const userId = req.user._id;

  const result = await patchShoppingListService(userId, idIngredientSL);

  if (result) {
    res.status(200).json({
      message: "remove ingridient from shoppinglist success",
      code: 200,
      data: result,
    });
  } else throw new FoundingError("Shopping list not found");
};

module.exports = {
  getShoppingListController,
  addShoppingListController,
  patchShoppingListController,
};
