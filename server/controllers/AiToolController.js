const AiTool = require("../models/AiTool");

exports.createTool = async (req, res) => {
  const tool = await AiTool.create(req.body);
  res.status(201).json(tool);
};

exports.getTools = async (req, res) => {
  const tools = await AiTool.find()
    .populate("category")
    .sort({ createdAt: -1 });

  res.json(tools);
};

exports.getToolsByCategory = async (req, res) => {
  const tools = await AiTool.find({ category: req.params.id });
  res.json(tools);
};

exports.deleteTool = async (req, res) => {
  await AiTool.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
