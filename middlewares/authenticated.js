const jwt = require("jsonwebtoken");

const authenticated = (req, res, next) => {
  const auth = req.headers?.authorization;
  if (auth) {
    const token = auth.split('Bearer ')[1]
    try {
      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.token = verifiedToken
      next()

    } catch (err) {
      res.status(401).send({
        message: 'Bad Token'
      })
    }
  } else {
    res.status(401).send({
      message: 'You are Unauthorized'
    })
  }
};

module.exports = { authenticated };
