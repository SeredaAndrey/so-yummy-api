const express = require("express");

const { asyncWrapper } = require("../middleware/errorHandler");
const { authMiddleware } = require("../middleware/authMiddleware");

const {
  registrationController,
  verifycationController,
  loginController,
  logoutController,
} = require("../controllers/authController");

const router = express.Router();

router.post("/registration", asyncWrapper(registrationController));
router.post("/verify/:vCode", asyncWrapper(verifycationController));
router.post("/login", asyncWrapper(loginController));

router.use(authMiddleware);

router.get("/logout", asyncWrapper(logoutController));

module.exports = { authRouter: router };
