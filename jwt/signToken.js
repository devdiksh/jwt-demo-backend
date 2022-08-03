const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");

const signToken = (payload) => {
  return jwt.sign(
    {
      ...payload,
      jwtid: v4(),
    },
    process.env.JWT_SECRET
  );
};

module.exports = { signToken };
