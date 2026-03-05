import { useEffect, useState } from "react";
import axios from "../api/axios";
import TaskItem from "./TaskItem";
import FilterTabs from "./FilterTabs";

export default function TaskList({ tasks, setTasks, filter, setFilter }) {
  const fetchTasks = async () => {
    const res = await axios.get(`/tasks?status=${filter}`);
    setTasks(res.data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  return (
    <div>
      <FilterTabs
        filter={filter}
        setFilter={setFilter}
      />

      {tasks.length === 0 ? (
        <p className="text-gray-500">
          No tasks found.
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            fetchTasks={fetchTasks}
          />
        ))
      )}
    </div>
  );
}