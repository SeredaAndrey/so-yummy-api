const express = require("express");

const { authMiddleware } = require("../middleware/authMiddleware");
const { asyncWrapper } = require("../middleware/errorHandler");

const {
  getUserDataController,
  patchUserDataController,
} = require("../controllers/userController");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(getUserDataController));
router.patch("/", asyncWrapper(patchUserDataController));

module.exports = { userRouter: router };
