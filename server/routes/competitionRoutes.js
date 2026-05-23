const express = require("express");
const router = express.Router();
const Competition = require("../models/Competition");
const multer = require("multer");
const path = require("path");

/* ================= IMAGE UPLOAD ================= */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ================= CREATE ================= */
router.post("/", upload.single("poster"), async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      category,
      link,
      mode,
      location,
      domain,
    } = req.body;

    if (!title || !category) {
      return res.status(400).json({ error: "Title & Category required" });
    }

    const competition = await Competition.create({
      title,
      description,
      date,
      category,
      link: link?.trim() || null,
      mode: mode?.trim() || null,
      location: location?.trim() || null,
      domain: domain?.trim() || null,
      poster: req.file ? `/uploads/${req.file.filename}` : "",
    });

    res.json(competition);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= GET BY CATEGORY ================= */
router.get("/category/:categoryId", async (req, res) => {
  try {
    const data = await Competition.find({
      category: req.params.categoryId,
    }).sort({ createdAt: -1 });

    res.json(Array.isArray(data) ? data : []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= GET SINGLE ================= */
router.get("/:id", async (req, res) => {
  try {
    const comp = await Competition.findById(req.params.id);
    res.json(comp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= UPDATE ================= */
router.put("/:id", upload.single("poster"), async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      link,
      mode,
      location,
      domain,
    } = req.body;

    const updateData = {
      title,
      description,
      date,
      mode: mode?.trim() || null,
      location: location?.trim() || null,
      domain: domain?.trim() || null,
    };

    // 🔥 IMPORTANT: link sirf tab update ho jab diya ho
    if (typeof link === "string" && link.trim() !== "") {
      updateData.link = link.trim();
    }

    if (req.file) {
      updateData.poster = `/uploads/${req.file.filename}`;
    }

    const updated = await Competition.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= DELETE ================= */
router.delete("/:id", async (req, res) => {
  try {
    await Competition.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
