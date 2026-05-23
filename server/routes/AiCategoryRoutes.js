const router = require("express").Router();
const {
  createCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/AiCategoryController");

router.post("/", createCategory);
router.get("/", getCategories);
router.delete("/:id", deleteCategory);

module.exports = router;
