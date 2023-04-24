const getShoppingListController = async (req, res, next) => {
  res.status(200).json({ code: 200, message: "success" });
};

const patchShoppingListController = async (req, res, next) => {
  res.status(200).json({ code: 200, message: "success" });
};

module.exports = { getShoppingListController, patchShoppingListController };
