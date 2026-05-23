const jwt = require("jsonwebtoken");

exports.isAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ msg: "Admin only" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};
