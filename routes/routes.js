const { authUser, getUser } = require("../authUsers");
const { signToken } = require("../jwt/signToken");
const { authenticated } = require("../middlewares/authenticated");

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

  app.get("/get-user", authenticated, (req, res) => {
    // Authenticated Request
    if (req.token) {
      const user = getUser({
        id: req.token.id,
      });
      if (user) {
        res.status(200).send({
          user,
          message: "User Fetched Successfully",
        });
      } else {
        res.status(402).send({
          message: 'Bad Data'
        })
      }
    }
  });
};

module.exports = { initRoutes };
