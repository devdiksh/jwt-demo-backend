const cors = require("cors");
const express = require("express");


const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(
    cors({
      origin: [process.env.WEB_APP_BASE_URL],
      credentials: true,
    })
  );
};

module.exports = { applyMiddleware };
