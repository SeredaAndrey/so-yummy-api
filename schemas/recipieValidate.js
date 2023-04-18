const Joi = require("joi");

const postRecipeValidate = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  area: Joi.string(),
  thumb: Joi.string(),
  preview: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  ingredients: Joi.array().items(
    Joi.object({
      id: Joi.string(),
      measure: Joi.string(),
    })
  ),
  instructions: Joi.string().required(),
  description: Joi.string().required(),
  time: Joi.string().required(),
  popularity: Joi.number(),
  youtube: Joi.string(),
});

const patchRecipeValidate = Joi.object({
  title: Joi.string(),
  category: Joi.string(),
  area: Joi.string(),
  thumb: Joi.string(),
  preview: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  ingredients: Joi.array().items(
    Joi.object({
      id: Joi.string(),
      measure: Joi.string(),
    })
  ),
  instructions: Joi.string(),
  description: Joi.string(),
  time: Joi.string(),
  popularity: Joi.number(),
  youtube: Joi.string(),
});

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

const recipieQueryValidete = Joi.object({
  page: Joi.string().pattern(/[0-9]/, { name: "numbers" }).min(1),
  limit: Joi.string().pattern(/[0-9]/, { name: "numbers" }).min(1),
});

module.exports = {
  postRecipeValidate,
  recipieInCategoryValidate,
  recipieQueryValidete,
  patchRecipeValidate,
};
