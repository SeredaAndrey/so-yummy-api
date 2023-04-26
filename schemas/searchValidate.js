const Joi = require("joi");

const searchRecipeValidate = Joi.object({
  title: Joi.string().required(),
  page: Joi.string().pattern(/[0-9]/, { name: "numbers" }).min(1),
  limit: Joi.string().pattern(/[0-9]/, { name: "numbers" }).min(1),
});

const searchRecipebyIngrValidate = Joi.object({
  ingredient: Joi.string().required(),
  page: Joi.string().pattern(/[0-9]/, { name: "numbers" }).min(1),
  limit: Joi.string().pattern(/[0-9]/, { name: "numbers" }).min(1),
});

module.exports = { searchRecipeValidate, searchRecipebyIngrValidate };
