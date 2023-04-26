const Joi = require("joi");

const shopingListValidate = Joi.object({
  id: Joi.string().required(),
  measure: Joi.string().required(),
});

module.exports = { shopingListValidate };
