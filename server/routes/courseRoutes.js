const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

/* =========================
   CREATE COURSE
========================= */
router.post("/", async (req, res) => {
  try {
    const { title, description, thumbnail, category } = req.body;

    if (!title || !category) {
      return res.status(400).json({
        success: false,
        message: "Title and category are required",
      });
    }

    const course = await Course.create({
      title: title.trim(),
      description,
      thumbnail,
      category, // 🔥 ObjectId of Category
    });

    return res.status(201).json({
      success: true,
      course,
    });

  } catch (err) {
    console.error("❌ Create course error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Course creation failed",
    });
  }
});

/* =========================
   GET COURSES (CATEGORY WISE)  ✅ ADMIN USE
========================= */
router.get("/category/:categoryId", async (req, res) => {
  try {
    const courses = await Course.find({
      category: req.params.categoryId,
    })
      .populate("category")       // 🔥 IMPORTANT
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      courses,
    });

  } catch (err) {
    console.error("❌ Get courses by category error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
    });
  }
});

/* =========================
   GET SINGLE COURSE
========================= */
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("category");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    return res.json({
      success: true,
      course,
    });

  } catch (err) {
    console.error("❌ Get course error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch course",
    });
  }
});

/* =========================
   UPDATE COURSE
========================= */
router.put("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("category");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    return res.json({
      success: true,
      course,
    });

  } catch (err) {
    console.error("❌ Update course error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Course update failed",
    });
  }
});

/* =========================
   DELETE COURSE
========================= */
router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    return res.json({
      success: true,
      message: "Course deleted successfully",
    });

  } catch (err) {
    console.error("❌ Delete course error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Course delete failed",
    });
  }
});

module.exports = router;
