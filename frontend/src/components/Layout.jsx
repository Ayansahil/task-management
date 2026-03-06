export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Task Management Portal
        </h1>
        {children}
      </div>
    </div>
  );
}