const { FoundingError, ValidateError } = require("../middleware/errorHandler");
const { userPatchValidate } = require("../schemas/userValidate");

const {
  getUserDataService,
  patchUserDataService,
  getUserInfoService,
} = require("../services/userService");

const getUserDataController = async (req, res, next) => {
  const _id = req.user._id;
  const user = await getUserDataService(_id);
  if (user) {
    res.status(200).json({
      message: "User found success",
      code: 200,
      user,
    });
  }
  throw new FoundingError("User not found");
};

const getUserInfoController = async (req, res, next) => {
  const _id = req.user._id;
  const infoUser = await getUserInfoService(_id);
  if (infoUser) {
    res.status(200).json({
      message: "Getting user information success",
      code: 200,
      infoUser,
    });
  } else {
    throw new FoundingError("user information not found");
  }
};

const patchUserDataController = async (req, res, next) => {
  let avatarUrl = "";
  if (req.file) {
    avatarUrl = req.file.path;
  } else {
    avatarUrl = null;
  }
  const reqValidate = userPatchValidate.validate(req.body);
  const body = req.body;
  const _id = req.user._id;

  if (!reqValidate.error) {
    const user = await patchUserDataService(_id, body, avatarUrl);
    if (user) {
      res.status(200).json({
        message: "User patch data success",
        code: 200,
        user,
      });
    } else {
      throw new FoundingError("Logined user not found");
    }
  } else {
    throw new ValidateError(reqValidate.error);
  }
};

module.exports = {
  getUserDataController,
  getUserInfoController,
  patchUserDataController,
};
