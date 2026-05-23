const Competition = require("../models/Competition");

const createCompetition = async (req, res) => {
  try {
    const comp = await Competition.create(req.body);
    res.json(comp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCompetitions = async (req, res) => {
  try {
    const comps = await Competition.find().populate("category");
    res.json(comps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCompetitionById = async (req, res) => {
  try {
    const comp = await Competition.findById(req.params.id);
    res.json(comp);
  } catch (err) {
    res.status(404).json({ error: "Competition not found" });
  }
};

module.exports = {
  createCompetition,
  getCompetitions,
  getCompetitionById,
};
