const jwt = require("jsonwebtoken");

const {
  ConflictError,
  ValidateError,
  AutorizationError,
} = require("../middleware/errorHandler");
const {
  userRegValidate,
  userLoginValidate,
} = require("../schemas/userValidate");
const {
  registrationService,
  verificationService,
  loginService,
  logoutService,
} = require("../services/authService");

const registrationController = async (req, res, next) => {
  const requestValidate = userRegValidate.validate(req.body);
  const body = req.body;

  if (!requestValidate.error) {
    const user = await registrationService(body);
    if (user) {
      return res.status(201).json({
        message: "created",
        code: 201,
        user,
      });
    } else {
      throw new ConflictError("Email is already in use");
    }
  } else {
    throw new ValidateError(requestValidate.error);
  }
};

const verifycationController = async (req, res, next) => {
  const { vCode } = req.params;
  const { email } = req.body;

  const data = await verificationService(email, vCode);
  if (!data) {
    throw new AutorizationError("email or verification code is wrong");
  }
  return res.status(200).json({
    message: "verification successful",
    code: 200,
    token: data.token,
    user: { email: email },
  });
};

const loginController = async (req, res, next) => {
  const requestValidate = userLoginValidate.validate(req.body);
  const { email, password } = req.body;
  if (!requestValidate.error) {
    const data = await loginService(email, password);
    if (!data) {
      throw new AutorizationError("email or password is wrong");
    }
    return res.status(200).json({
      message: "logged successful",
      code: 200,
      token: data.token,
      user: { email: email },
    });
  } else throw new ValidateError(requestValidate.error);
};

const logoutController = async (req, res, next) => {
  const _id = req.user._id;
  console.log(_id);
  const result = await logoutService(_id);
  if (result) {
    return res.status(204).json({
      message: "logout successful",
      code: 204,
    });
  } else throw new AutorizationError("Logined user not found");
};

module.exports = {
  registrationController,
  verifycationController,
  loginController,
  logoutController,
};
