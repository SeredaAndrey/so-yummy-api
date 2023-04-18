const Joi = require("joi");

const userValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  password: Joi.string().min(6).max(16).required(),
  name: Joi.string().min(1).max(16).required(),
});

const userPatchNameValidate = Joi.object({
  name: Joi.string().min(1).max(16).required(),
});

const subscribeValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
});

module.exports = { userValidate, userPatchNameValidate, subscribeValidate };
