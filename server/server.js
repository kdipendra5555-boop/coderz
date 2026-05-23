/* ================= LOAD ENV (SABSE UPAR) ================= */
require("dotenv").config({
  path: __dirname + "/.env",
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

/* ================= DEBUG ================= */
console.log("MONGO_URL from env =>", process.env.MONGO_URL);

/* ================= MIDDLEWARES ================= */
app.use(cors());

// 🔥 BODY PARSERS (POST ke liye MUST)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// uploads folder public
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ================= DATABASE ================= */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

/* ================= ROUTES ================= */

// AUTH
app.use("/api/auth", require("./routes/authRoutes"));

// COURSES
app.use("/api/courses", require("./routes/courseRoutes"));

// LECTURES
app.use("/api/lectures", require("./routes/lectureRoutes"));

// NOTES
app.use("/api/notes", require("./routes/noteRoutes"));

// CATEGORIES
app.use("/api/categories", require("./routes/categoryRoutes"));

// AI CATEGORY & TOOLS
app.use("/api/ai-categories", require("./routes/AiCategoryRoutes"));
app.use("/api/ai-tools", require("./routes/AiToolRoutes"));

// CONTACT FORM
app.use("/api/contact", require("./routes/contactRoutes"));

/* ================= EVENTS MODULE ================= */
// ⚠️ try/catch hata diya — route fail hua to hume dikhe
app.use(
  "/api/event-categories",
  require("./routes/eventCategoryRoutes")
);

app.use(
  "/api/competitions",
  require("./routes/competitionRoutes")
);

app.use(
  "/api/registrations",
  require("./routes/registrationRoutes")
);

console.log("✅ Events routes loaded");

/* ================= TEST ROUTES ================= */
app.get("/", (req, res) => {
  res.send("🚀 Coderz Cafe Backend Running");
});

// 🔥 DEBUG ROUTE (VERY IMPORTANT)
app.get("/api/test", (req, res) => {
  res.json({ ok: true });
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
