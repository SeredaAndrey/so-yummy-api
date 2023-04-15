const Joi = require("joi");

const userValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  password: Joi.string().min(5).max(16).required(),
});

const userPatchNameValidate = Joi.object({
  name: Joi.string().min(2).max(20),
});

const subscribeValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
});

module.exports = { userValidate, userPatchNameValidate, subscribeValidate };
