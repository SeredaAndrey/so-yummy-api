const Joi = require("joi");

const recipieInCategoryValidate = Joi.object({
  category: Joi.string()
    .required()
    .allow(
      "Beef",
      "Breakfast",
      "Chicken",
      "Dessert",
      "Goat",
      "Lamb",
      "Miscellaneous",
      "Pasta",
      "Pork",
      "Seafood",
      "Side",
      "Starter",
      "Vegan",
      "Vegetarian"
    ),
});

const recipieInCategoryQueryValidete = Joi.object({
  page: Joi.string().pattern(/[0-9]/, { name: "numbers" }).min(1),
  limit: Joi.string().pattern(/[0-9]/, { name: "numbers" }).min(1),
});

module.exports = { recipieInCategoryValidate, recipieInCategoryQueryValidete };
