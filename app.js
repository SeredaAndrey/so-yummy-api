const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { subscribeRouter } = require("./routes/susbscribeRouter");
const { authRouter } = require("./routes/authRouter");
const { userRouter } = require("./routes/userRouter");
const { recipesRouter } = require("./routes/recipesRouter");
const { searchRouter } = require("./routes/searchRouter");
const { ingredientsRouter } = require("./routes/ingredientsRouter");
const { ownRecipesRouter } = require("./routes/ownRecipesRouter");
const { favoriteRouter } = require("./routes/favoriteRouter");
const { popularRouter } = require("./routes/popularRouter");
const { shoppingListRouter } = require("./routes/shoppingListRouter");

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
app.use("/api/recipes", recipesRouter);
app.use("/api/search", searchRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/ownRecipes", ownRecipesRouter);
app.use("/api/favorite", favoriteRouter);
app.use("/api/popular-recipe", popularRouter);
app.use("/api/shopping-list", shoppingListRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
