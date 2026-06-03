const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Access the token from the cookies instead of the header
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Access Denied: No token provided",
    });
  }

  try {
    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;