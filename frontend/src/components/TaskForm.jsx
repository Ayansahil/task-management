import { useState } from "react";
import axios from "../api/axios";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Medium");

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("/tasks", {
      title,
      description,
      status,
      priority,
    });

    setTitle("");
    setDescription("");
    setStatus("Pending");
    setPriority("Medium");

    onTaskAdded();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-6 rounded-xl shadow-md mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        Add New Task
      </h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Title *
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* Status */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Status
        </label>
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="w-full p-3 border rounded-lg"
        >
          <option value="Pending">
            Pending
          </option>
          <option value="Completed">
            Completed
          </option>
        </select>
      </div>

      {/* Priority (Extra Attribute) */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Priority
        </label>
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          className="w-full p-3 border rounded-lg"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
        Add Task
      </button>
    </form>
  );
}