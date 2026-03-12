import { Plus } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Khối bên trái: Text */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
        <p className="mt-2 text-gray-600">Welcome to YOEDU Admin Panel</p>
      </div>

      {/* Khối bên phải: Button */}
      <div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <Plus className="w-5 h-5 " />
          Add New Student
        </button>
      </div>

    </div>
  );
}