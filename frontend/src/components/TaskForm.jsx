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

    if (typeof onTaskAdded === "function") onTaskAdded();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-2xl mb-6 border border-slate-700"
    >
      {/* Header */}
      <div className="mb-7">
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
          New Task
        </span>
        <h2 className="text-2xl font-bold text-white mt-1">Add Task</h2>
      </div>

      {/* Title */}
      <div className="mb-5">
        <label className="block mb-1.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
          Title <span className="text-indigo-400">*</span>
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block mb-1.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add some details..."
          rows={3}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
        />
      </div>

      {/* Status + Priority side by side */}
      <div className="grid grid-cols-2 gap-4 mb-7">
        {/* Status */}
        <div>
          <label className="block mb-1.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          >
            <option value="Pending">⏳ Pending</option>
            <option value="Completed">✅ Completed</option>
          </select>
        </div>

        {/* Priority */}
        <div>
          <label className="block mb-1.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          >
            <option value="Low">🟢 Low</option>
            <option value="Medium">🟡 Medium</option>
            <option value="High">🔴 High</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold rounded-xl tracking-wide transition-all duration-150 shadow-lg shadow-indigo-900">
        + Add Task
      </button>
    </form>
  );
}
