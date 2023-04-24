const ShopingList = require("../schemas/shoppingListSchema");

const getShoppingListService = async (userId) => {
  return await ShopingList.findOne({ owner: userId });
};

const addShoppingListService = async (userId, body) => {
  const shopingList = await ShopingList.findOne({ owner: userId });
  if (!shopingList) {
    return ShopingList.create({ ingredients: body, owner: userId });
  } else {
    return ShopingList.findOneAndUpdate(
      { owner: userId },
      {
        $push: { ingredients: body },
      },
      { new: true }
    );
  }
};

const patchShoppingListService = async (userId, idIngredientSL) => {
  return await ShopingList.findOneAndUpdate(
    { owner: userId },
    { $pull: { ingredients: idIngredientSL } },
    { new: true }
  );
};

module.exports = {
  getShoppingListService,
  addShoppingListService,
  patchShoppingListService,
};
