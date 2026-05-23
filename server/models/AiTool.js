const mongoose = require("mongoose");

const aiToolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    useLink: { type: String },
    learnLink: { type: String },
    thumbnail: { type: String },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AiCategory",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AiTool", aiToolSchema);
