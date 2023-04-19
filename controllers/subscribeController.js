const { InternalError, ValidateError } = require("../middleware/errorHandler");

const { subscribeValidate } = require("../schemas/userValidate");
const { subscribeService } = require("../services/subscribeService");

const subscribeController = async (req, res, next) => {
  const reqValidate = subscribeValidate.validate(req.body);
  const { email } = req.body;
  if (!reqValidate.error) {
    const resp = await subscribeService(email);
    if (resp) {
      return res.status(200).json({
        message: `subscribe to ${email} success`,
        code: 200,
      });
    } else {
      throw new InternalError("Internal server error");
    }
  } else {
    throw new ValidateError(reqValidate.error);
  }
};

module.exports = { subscribeController };
