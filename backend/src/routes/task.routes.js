const express = require("express");
const router = express.Router();

const {
  createTaskController,
  getTasksController,
  toggleTaskStatusController,
} = require("../controllers/task.controller");

const { authMiddleware } = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, createTaskController);
router.get("/", authMiddleware, getTasksController);
router.patch("/:id", authMiddleware, toggleTaskStatusController);

module.exports = router;