const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});

module.exports = mongoose.model("Lecture", lectureSchema);
