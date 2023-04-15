const Joi = require("joi");

const userValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  password: Joi.string().min(5).max(16).required(),
});

module.exports = { userValidate };
