const express = require("express");

const { authMiddleware } = require("../middleware/authMiddleware");
const { asyncWrapper } = require("../middleware/errorHandler");

const uploadAvatarCloud = require("../middleware/uploadMiddleware");

const {
  getUserDataController,
  patchUserDataController,
  getUserInfoController,
} = require("../controllers/userController");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(getUserDataController));
router.get("/info", asyncWrapper(getUserInfoController));
router.patch(
  "/",
  uploadAvatarCloud.single("image"),
  asyncWrapper(patchUserDataController)
);

module.exports = { userRouter: router };
