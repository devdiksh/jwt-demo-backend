const jwt = require("jsonwebtoken");

const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

module.exports = { signToken };
