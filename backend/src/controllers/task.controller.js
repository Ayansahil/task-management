const taskModel = require("../models/task.model");


const createTaskController = async (req, res) => {
  try {
    const { title, description, status, priority } = req.body;
    const userId = req.userId;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const task = await taskModel.create({
      title,
      description,
      status,
      priority,
      userId,
    });

    if (!task) {
      return res.status(400).json({
        message: "Something went wrong!",
      });
    }

    return res.status(201).json({
      message: "Task created successfully!",
      task: task,
    });

  } catch (error) {
    console.log("error in create task ->", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};



const getTasksController = async (req, res) => {
  try {
    const { status } = req.query;
    const userId = req.userId;

    let filter = { userId };

    if (status && status !== "All") {
      filter.status = status;
    }

    const tasks = await taskModel
      .find(filter)
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Tasks fetched successfully!",
      tasks: tasks,
    });

  } catch (error) {
    console.log("error in fetching tasks ->", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};



const toggleTaskStatusController = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.userId;

    const task = await taskModel.findOne({ _id: taskId, userId });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.status =
      task.status === "Pending"
        ? "Completed"
        : "Pending";

    await task.save();

    return res.status(200).json({
      message: "Task status updated successfully!",
      task: task,
    });

  } catch (error) {
    console.log("error in toggle status ->", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};;



module.exports = {
  createTaskController,
  getTasksController,
  toggleTaskStatusController,
};