export default function FilterTab({ filter, setFilter }) {
  const tabs = ["All", "Pending", "Completed"];

  return (
    <div className="flex gap-3 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-4 py-2 rounded-lg font-medium transition 
          ${
            filter === tab
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}