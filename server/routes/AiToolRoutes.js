const router = require("express").Router();
const {
  createTool,
  getTools,
  getToolsByCategory,
  deleteTool,
} = require("../controllers/AiToolController");

router.post("/", createTool);
router.get("/", getTools);
router.get("/category/:id", getToolsByCategory);
router.delete("/:id", deleteTool);

module.exports = router;
