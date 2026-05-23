const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    thumbnail: {
      type: String,
      trim: true,
    },

    // 🔥 MOST IMPORTANT FIX
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true, // 👈 MUST
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
