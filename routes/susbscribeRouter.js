const express = require("express");

const { asyncWrapper } = require("../middleware/errorHandler");

const { subscribeController } = require("../controllers/subscribeController");

const router = express.Router();

router.get("/", asyncWrapper(subscribeController));

module.exports = { subscribeRouter: router };
