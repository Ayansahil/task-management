import axios from "../api/axios"

export default function TaskItem({ task, fetchTasks }) {
  const toggleStatus = async () => {
    await axios.patch(`/tasks/${task._id}`)
    fetchTasks()
  }

  const isCompleted = task.status === "Completed"

  return (
  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-2xl shadow-xl mb-4 border border-slate-700 hover:border-indigo-500 transition-all duration-300">
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1 min-w-0">
        {/* Title */}
        <h3 className={`text-lg font-bold truncate ${isCompleted ? "line-through text-slate-500" : "text-white"}`}>
          {task.title}
        </h3>

        {/* Description */}
        {task.description && (
          <p className="text-slate-400 text-sm mt-1 leading-relaxed line-clamp-2">
            {task.description}
          </p>
        )}

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-3 text-xs">
          {/* Status Badge */}
          <span className={`px-3 py-1 rounded-full font-semibold tracking-wide
            ${isCompleted
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"}`}
          >
            {isCompleted ? "✅ Completed" : "⏳ Pending"}
          </span>

          {/* Priority Badge */}
          <span className={`px-3 py-1 rounded-full font-semibold tracking-wide
            ${task.priority === "High"
              ? "bg-red-500/20 text-red-400 border border-red-500/30"
              : task.priority === "Medium"
              ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"}`}
          >
            {task.priority === "High" ? "🔴" : task.priority === "Medium" ? "🟡" : "🟢"} {task.priority}
          </span>
        </div>

        {/* Created At */}
        <p className="text-xs text-slate-600 mt-3 flex items-center gap-1">
          <span>🕐</span>
          {new Date(task.createdAt).toLocaleString()}
        </p>
      </div>

      {/* Toggle Switch */}
      <button
        onClick={toggleStatus}
        className={`relative inline-flex h-6 w-12 shrink-0 items-center rounded-full transition-all duration-300 shadow-inner
          ${isCompleted ? "bg-green-500 shadow-green-900" : "bg-slate-600"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-all duration-300
            ${isCompleted ? "translate-x-6" : "translate-x-1"}`}
        />
      </button>
    </div>
  </div>
);
}