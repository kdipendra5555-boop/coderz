const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String },

    poster: {
      type: String, // image url/path
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EventCategory",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Competition", competitionSchema);
