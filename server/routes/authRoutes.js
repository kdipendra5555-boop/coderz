const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController"); // ✅ FIXED PATH

const { isAdmin } = require("../middlewares/authMiddleware");
const User = require("../models/User");

// ================= REGISTER =================
router.post("/register", registerUser); // ✅ FIXED

// ================= LOGIN =================
router.post("/login", loginUser); // ✅ FIXED

// ================= EMAIL VERIFY =================
router.get("/verify/:token", async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);

    await User.findByIdAndUpdate(decoded.id, {
      isVerified: true,
    });

    res.send(`
      <h2>Email verified successfully ✅</h2>
      <p>You can now login to Coderz Cafe.</p>
      <a href="http://localhost:5173/login">Go to Login</a>
    `);
  } catch (err) {
    res.send("Invalid or expired verification link ❌");
  }
});

// ================= ADMIN TEST =================
router.get("/admin-test", isAdmin, (req, res) => {
  res.send("Admin access granted");
});

// ================= TEST EMAIL =================
router.get("/test-mail", async (req, res) => {
  try {
    const sendEmail = require("../utils/sendEmail");

    await sendEmail(
      "kdipendra5555@gmail.com",
      "https://google.com"
    );

    res.send("Test mail sent successfully ✅");
  } catch (err) {
    console.error("❌ Test mail error:", err.message);
    res.status(500).send("Test mail failed ❌");
  }
});

module.exports = router;
