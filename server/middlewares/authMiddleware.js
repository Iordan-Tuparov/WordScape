const { SECRET } = require("../config/env");

const { verify } = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader) {
    try {
      const decodedToken = await verify(authHeader, SECRET);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).json({ error: "Invalid or expired token" });
    }
  } else {
    res.status(401).json({ error: "No token provided" });
  }
};
