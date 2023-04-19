const jwt = require("jsonwebtoken");
const { AutorizationError } = require("./errorHandler");

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(
      new AutorizationError(
        "Please, provide a token in request authorization header"
      )
    );
  }
  const [, token] = authorization.split(" ");
  if (!token) {
    return next(new AutorizationError("Not authorized"));
  }
  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    new AutorizationError("Invalid token");
  }
};

module.exports = { authMiddleware };
