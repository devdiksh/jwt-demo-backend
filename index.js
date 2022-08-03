const express = require("express");
const { resolve } = require("path");
const cors = require("cors");
const { authUser } = require("./authUsers");

require("dotenv").config({ path: resolve(__dirname, ".env") });

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [process.env.WEB_APP_BASE_URL],
    credentials: true,
  })
);

// Requests
app.post("/login", (req, res) => {
  if (
    authUser({ username: req.body?.username, password: req.body?.password })
  ) {
    // Login Successful
    res.status(200).send("Login Successful");
  } else {
    // Login Failed
    res.status(401).send("Login Failed");
  }
});

app.listen(port, () => {
  console.log("App listening on port", port);
});
