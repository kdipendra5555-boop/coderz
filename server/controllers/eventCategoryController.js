const EventCategory = require("../models/EventCategory");

const createCategory = async (req, res) => {
  try {
    const category = await EventCategory.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await EventCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createCategory, getCategories };
