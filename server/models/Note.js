const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  pdfUrl: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});

module.exports = mongoose.model("Note", noteSchema);
