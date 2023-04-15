const express = require("express");

const { authMiddleware } = require("../middleware/authMiddleware");
const { asyncWrapper } = require("../middleware/errorHandler");

const { getSearchController } = require("../controllers/searchController");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(getSearchController));

module.exports = { searchRouter: router };
