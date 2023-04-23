const Ingredient = require("../schemas/ingredientsSchema");

const getListIngredientsService = async () => {
  return await Ingredient.find({});
};

const getIngredientsService = async (ingredient) => {
  return await Ingredient.findOne(
    {
      $or: [
        { ttl: { $regex: ingredient.toLowerCase() } },
        { ttl: { $regex: capitalize(ingredient) } },
      ],
    },
    { ttl: true }
  );
};

module.exports = { getListIngredientsService, getIngredientsService };

const capitalize = (str) => {
  const toLowerCaseCategory = str.toLowerCase();

  return toLowerCaseCategory.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};
