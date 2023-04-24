const express = require("express");

const { asyncWrapper } = require("../middleware/errorHandler");

const { popularController } = require("../controllers/popularController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(popularController));

module.exports = { popularRouter: router };
