const AiCategory = require("../models/AiCategory");

exports.createCategory = async (req, res) => {
  try {
    const category = await AiCategory.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCategories = async (req, res) => {
  const categories = await AiCategory.find().sort({ createdAt: -1 });
  res.json(categories);
};

exports.deleteCategory = async (req, res) => {
  await AiCategory.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
