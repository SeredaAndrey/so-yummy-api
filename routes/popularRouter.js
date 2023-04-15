const express = require("express");

const { asyncWrapper } = require("../middleware/errorHandler");

const { popularController } = require("../controllers/popularController");

const router = express.Router();

router.get("/", asyncWrapper(popularController));

module.exports = { popularRouter: router };
