const Joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = Joi.extend(joiPasswordExtendCore);

const userRegValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  password: joiPassword
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,16}$"))
    .minOfLowercase(2)
    .minOfUppercase(2)
    .minOfNumeric(2)
    .required(),
  name: Joi.string().pattern(new RegExp("^[ a-zA-Z0-9]{1,16}$")).required(),
});

const userLoginValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  password: joiPassword
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,16}$"))
    .required(),
});

const userPatchValidate = Joi.object({
  name: Joi.string().pattern(new RegExp("^[ a-zA-Z0-9]{1,16}$")).required(),
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
