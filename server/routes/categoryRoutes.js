const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

/* =========================
   CREATE CATEGORY
========================= */
router.post("/", async (req, res) => {
  try {
    console.log("🔥 CATEGORY CREATE HIT");
    console.log("🔥 BODY:", req.body);

    const name = req.body?.name?.trim();

    // body check
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    // ✅ CASE-INSENSITIVE duplicate check
    const exists = await Category.findOne({
      name: { $regex: `^${name}$`, $options: "i" },
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await Category.create({ name });

    return res.status(201).json({
      success: true,
      category,
    });

  } catch (err) {
    console.error("❌ Create category error:", err.message);
    return res.status(500).json({
      success: false,
      message: err.message || "Category creation failed",
    });
  }
});

/* =========================
   GET ALL CATEGORIES
========================= */
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      categories,
    });

  } catch (err) {
    console.error("❌ Get categories error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
    });
  }
});

/* =========================
   UPDATE CATEGORY
========================= */
router.put("/:id", async (req, res) => {
  try {
    const name = req.body?.name?.trim();

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.json({
      success: true,
      category,
    });

  } catch (err) {
    console.error("❌ Update category error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Category update failed",
    });
  }
});

/* =========================
   DELETE CATEGORY
========================= */
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.json({
      success: true,
      message: "Category deleted successfully",
    });

  } catch (err) {
    console.error("❌ Delete category error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Category delete failed",
    });
  }
});

module.exports = router;
