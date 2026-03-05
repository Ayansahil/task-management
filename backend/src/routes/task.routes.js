const express = require("express");
const router = express.Router();

const {
  createTaskController,
  getTasksController,
  toggleTaskStatusController,
} = require("../controllers/task.controller");

router.post("/", createTaskController);
router.get("/", getTasksController);
router.patch("/:id", toggleTaskStatusController);

module.exports = router;