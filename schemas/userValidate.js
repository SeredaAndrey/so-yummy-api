const Joi = require("joi");

const userRegValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  password: Joi.string().min(6).max(16).required(),
  name: Joi.string().min(1).max(16).required(),
});

const userLoginValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  password: Joi.string().min(6).max(16).required(),
});

const userPatchValidate = Joi.object({
  name: Joi.string().min(1).max(16).required(),
  avatarUrl: Joi.any(),
});

const subscribeValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
});

module.exports = {
  userRegValidate,
  userLoginValidate,
  userPatchValidate,
  subscribeValidate,
};
