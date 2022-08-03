const { authUser } = require("../authUsers");

const initRoutes = (app) => {

  // Login
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
};

module.exports = { initRoutes };
