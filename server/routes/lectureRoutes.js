const express = require("express");
const Lecture = require("../models/Lecture");

const router = express.Router();

/* =========================
   CREATE LECTURE
========================= */
router.post("/", async (req, res) => {
  try {
    const { title, videoUrl, course } = req.body;

    if (!title || !course) {
      return res.status(400).json({
        message: "Lecture title and course are required",
      });
    }

    const lecture = await Lecture.create({
      title,
      videoUrl,
      course,
    });

    res.status(201).json(lecture);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   GET LECTURES (COURSE WISE)
========================= */
router.get("/course/:id", async (req, res) => {
  try {
    const lectures = await Lecture.find({ course: req.params.id })
      .sort({ createdAt: 1 }); // order wise

    res.json(lectures);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   UPDATE LECTURE
========================= */
router.put("/:id", async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }

    res.json(lecture);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   DELETE LECTURE
========================= */
router.delete("/:id", async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndDelete(req.params.id);

    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }

    res.json({
      success: true,
      message: "Lecture deleted successfully",
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
