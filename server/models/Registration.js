const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  competitionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Competition",
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
