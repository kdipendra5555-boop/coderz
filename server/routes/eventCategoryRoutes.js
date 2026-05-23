const express = require("express");
const router = express.Router();
const EventCategory = require("../models/EventCategory");

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await EventCategory.find();
    res.json(Array.isArray(categories) ? categories : []);
  } catch (err) {
    res.status(500).json([]);
  }
});

// CREATE category
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ error: "Category name required" });
    }
    const category = await EventCategory.create({ name: name.trim() });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE category
router.put("/:id", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ error: "Category name required" });
    }

    const updated = await EventCategory.findByIdAndUpdate(
      req.params.id,
      { name: name.trim() },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE category
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await EventCategory.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
