const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

/* =========================
   CREATE NOTE
========================= */
router.post("/", async (req, res) => {
  try {
    const { title, pdfUrl, course } = req.body;

    if (!title || !course) {
      return res.status(400).json({
        message: "Note title and course are required",
      });
    }

    const note = await Note.create({
      title,
      pdfUrl,
      course,
    });

    res.status(201).json(note);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   GET NOTES (COURSE WISE)
========================= */
router.get("/course/:id", async (req, res) => {
  try {
    const notes = await Note.find({ course: req.params.id })
      .sort({ createdAt: 1 });

    res.json(notes);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   UPDATE NOTE
========================= */
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   DELETE NOTE
========================= */
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({
      success: true,
      message: "Note deleted successfully",
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
