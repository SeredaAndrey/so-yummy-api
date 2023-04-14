const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 8081;
const DB_HOST = process.env.DB_HOST;

const connection = mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server running. Use our API on port: ${PORT}. Database connection successful`
      );
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );
