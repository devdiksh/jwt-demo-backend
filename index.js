const express = require("express");
const { resolve } = require("path");
const { applyMiddleware } = require("./middlewares/expressMiddleware");
const { initRoutes } = require("./routes/routes");

require("dotenv").config({ path: resolve(__dirname, ".env") });

const app = express();
const port = process.env.PORT;

// Middlewares
applyMiddleware(app)

// Routes
initRoutes(app)

app.listen(port, () => {
  console.log("App listening on port", port);
});
