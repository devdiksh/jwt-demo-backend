const { authUser } = require("../authUsers");
const { signToken } = require("../jwt/signToken");

const initRoutes = (app) => {
  // Login
  app.post("/login", (req, res) => {
    const user = authUser({
      username: req.body?.username,
      password: req.body?.password,
    });

    if (user) {
      // Sign JWT
      const token = signToken(user);

      // Login Successful
      res.status(200).send({
        token,
        message: "Login Successful",
      });
    } else {
      // Login Failed
      res.status(401).send({
        message: "Login Failed",
      });
    }
  });
};

module.exports = { initRoutes };
