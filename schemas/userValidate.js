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
    .minOfLowercase(1)
    .minOfUppercase(0)
    .minOfNumeric(1)
    .onlyLatinCharacters()
    .required()
    .messages({
      "password.minOfUppercase":
        "{#label} should contain at least {#min} uppercase character",
      "password.minOfLowercase":
        "{#label} should contain at least {#min} lowercase character",
      "password.minOfNumeric":
        "{#label} should contain at least {#min} numeric character",
      "password.onlyLatinCharacters":
        "{#label} should contain only latin characters",
    }),
  name: Joi.string()
    .pattern(new RegExp("^[a-zа-яA-ZА-Я0-9]{1,16}[ a-zа-яA-ZА-Я0-9]{0,16}$"))
    .required(),
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
  name: Joi.string()
    .pattern(new RegExp("^[a-zа-яA-ZА-Я0-9]{1,16}[ a-zа-яA-ZА-Я0-9]{0,16}$"))
    .required(),
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
