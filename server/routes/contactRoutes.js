const express = require("express");
const router = express.Router();   // ✅ MISSING LINE (IMPORTANT)
const sendMail = require("../utils/sendMail");

router.post("/", async (req, res) => {
  try {
    console.log("📩 FORM DATA:", req.body);

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    await sendMail({
      subject: "📩 New Contact Form - Coderz Cafe",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ MAIL ERROR:", err.message);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
