const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { subscribeRouter } = require("./routes/susbscribeRouter");
const { authRouter } = require("./routes/authRouter");
const { userRouter } = require("./routes/userRouter");

const { errorHandler } = require("./middleware/errorHandler");

require("dotenv").config();

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/subscribe", subscribeRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
