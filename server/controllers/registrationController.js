const Registration = require("../models/Registration");

const registerCompetition = async (req, res) => {
  try {
    await Registration.create(req.body);
    res.json({ message: "Registered Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerCompetition };
